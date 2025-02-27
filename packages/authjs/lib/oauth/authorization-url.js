import * as checks from "./checks.js";
import * as o from "oauth4webapi";
/**
 * Generates an authorization/request token URL.
 *
 * [OAuth 2](https://www.oauth.com/oauth2-servers/authorization/the-authorization-request/)
 */
export async function getAuthorizationUrl(query, options) {
    const { logger, provider } = options;
    let url = provider.authorization?.url;
    let as;
    // Falls back to authjs.dev if the user only passed params
    if (!url || url.host === "authjs.dev") {
        // If url is undefined, we assume that issuer is always defined
        // We check this in assert.ts
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const issuer = new URL(provider.issuer);
        const discoveryResponse = await o.discoveryRequest(issuer);
        const as = await o.processDiscoveryResponse(issuer, discoveryResponse);
        if (!as.authorization_endpoint) {
            throw new TypeError("Authorization server did not provide an authorization endpoint.");
        }
        url = new URL(as.authorization_endpoint);
    }
    const authParams = url.searchParams;
    let redirect_uri = provider.callbackUrl;
    let data;
    if (!options.isOnRedirectProxy && provider.redirectProxyUrl) {
        redirect_uri = provider.redirectProxyUrl;
        data = { origin: provider.callbackUrl };
        logger.debug("using redirect proxy", { redirect_uri, data });
    }
    const params = Object.assign({
        response_type: "code",
        // clientId can technically be undefined, should we check this in assert.ts or rely on the Authorization Server to do it?
        client_id: provider.clientId,
        redirect_uri,
        // @ts-expect-error TODO:
        ...provider.authorization?.params,
    }, Object.fromEntries(provider.authorization?.url.searchParams ?? []), query);
    for (const k in params)
        authParams.set(k, params[k]);
    const cookies = [];
    const state = await checks.state.create(options, data);
    if (state) {
        authParams.set("state", state.value);
        cookies.push(state.cookie);
    }
    if (provider.checks?.includes("pkce")) {
        if (as && !as.code_challenge_methods_supported?.includes("S256")) {
            // We assume S256 PKCE support, if the server does not advertise that,
            // a random `nonce` must be used for CSRF protection.
            if (provider.type === "oidc")
                provider.checks = ["nonce"];
        }
        else {
            const { value, cookie } = await checks.pkce.create(options);
            authParams.set("code_challenge", value);
            authParams.set("code_challenge_method", "S256");
            cookies.push(cookie);
        }
    }
    const nonce = await checks.nonce.create(options);
    if (nonce) {
        authParams.set("nonce", nonce.value);
        cookies.push(nonce.cookie);
    }
    // TODO: This does not work in normalizeOAuth because authorization endpoint can come from discovery
    // Need to make normalizeOAuth async
    if (provider.type === "oidc" && !url.searchParams.has("scope")) {
        url.searchParams.set("scope", "openid profile email");
    }
    logger.debug("authorization url is ready", { url, cookies, provider });
    return { redirect: url.toString(), cookies };
}
