/**
 * <div style={{backgroundColor: "#000", display: "flex", justifyContent: "space-between", color: "#fff", padding: 16}}>
 * <span>Built-in <b>ZOHO</b> integration.</span>
 * <a href="https://zoho.com/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/providers/zoho.svg" height="48" />
 * </a>
 * </div>
 *
 * @module providers/zoho
 */
import type { OAuthConfig, OAuthUserConfig } from "./index.js";
/**
 * Add ZOHO login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/auth/callback/zoho
 * ```
 *
 * #### Configuration
 *```js
 * import Auth from "@auth/core"
 * import ZOHO from "@auth/core/providers/zoho"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [ZOHO({ clientId: ZOHO_CLIENT_ID, clientSecret: ZOHO_CLIENT_SECRET })],
 * })
 * ```
 *
 * ### Resources
 *
 * - [Zoho OAuth 2.0 Integration Guide](https://www.zoho.com/accounts/protocol/oauth/web-server-applications.html)
 * - [Zoho API Console](https://api-console.zoho.com)
 *
 * ### Notes
 *
 * By default, Auth.js assumes that the ZOHO provider is
 * based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.
 *
 * :::tip
 *
 * The ZOHO provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/zoho.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */
export default function Zoho(config: OAuthUserConfig<Record<string, any>>): OAuthConfig<Record<string, any>>;
//# sourceMappingURL=zoho.d.ts.map