import { renderToString } from "preact-render-to-string"
import ErrorPage from "./error.js"
import SigninPage from "./signin.js"
import SignoutPage from "./signout.js"
import css from "./styles.js"
import VerifyRequestPage from "./verify-request.js"
import { passkeyScript } from "../passkey/browser-script.js"

import type {
  ErrorPageParam,
  InternalOptions,
  RequestInternal,
  ResponseInternal,
} from "../../types.js"
import type { Cookie } from "../cookie.js"

function send({
  html,
  title,
  status,
  cookies,
  theme,
  bodyScript,
  headScript,
}: any): ResponseInternal {
  return {
    cookies,
    status,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>${css}</style>
    <title>${title}</title>
    ${headScript ? headScript : ""}
  </head>
  <body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}">
    <div class="page">
      ${renderToString(html)}
    </div>
    ${bodyScript ? "<script>" + bodyScript + "</script>" : ""}
  </body>
</html>`,
  }
}

type RenderPageParams = {
  query?: RequestInternal["query"]
  cookies?: Cookie[]
} & Partial<
  Pick<
    InternalOptions,
    "url" | "callbackUrl" | "csrfToken" | "providers" | "theme"
  >
>

/**
 * Unless the user defines their [own pages](https://authjs.dev/guides/basics/pages),
 * we render a set of default ones, using Preact SSR.
 */
export default function renderPage(params: RenderPageParams) {
  const { url, theme, query, cookies } = params

  return {
    signin(props?: any) {
      // The passkey provider requires client-side JS to work, so we check if it's 
      // enabled and if so, inject a CDN-loaded version of @simplewebauthn/browser
      // and our client-side script into the page.
      const passkeyProvider = params.providers?.find(
        (p) => p.type === "passkey"
      )
      const bodyScript = passkeyProvider
        ? `(${passkeyScript})("${url}")`
        : undefined
      const headScript = passkeyProvider
        ? `<script src="https://unpkg.com/@simplewebauthn/browser@8.3.1/dist/bundle/index.es5.umd.min.js" integrity="sha384-eZYMtGBrkFn629MZjjVsF5di74KhByc7vUNWXJrEmVZew+mzeejEjKwfCwqLaxLD" crossorigin="anonymous"></script>`
        : undefined

      return send({
        cookies,
        theme,
        html: SigninPage({
          csrfToken: params.csrfToken,
          // We only want to render providers
          providers: params.providers?.filter(
            (provider) =>
              // Always render oauth, email, and passkey type providers
              ["email", "oauth", "oidc", "passkey"].includes(provider.type) ||
              // Only render credentials type provider if credentials are defined
              (provider.type === "credentials" && provider.credentials) ||
              // Don't render other provider types
              false
          ),
          callbackUrl: params.callbackUrl,
          theme,
          ...query,
          ...props,
        }),
        title: "Sign In",
        bodyScript,
        headScript,
      })
    },
    signout(props?: any) {
      return send({
        cookies,
        theme,
        html: SignoutPage({
          csrfToken: params.csrfToken,
          url,
          theme,
          ...props,
        }),
        title: "Sign Out",
      })
    },
    verifyRequest(props?: any) {
      return send({
        cookies,
        theme,
        html: VerifyRequestPage({ url, theme, ...props }),
        title: "Verify Request",
      })
    },
    error(props?: { error?: ErrorPageParam }) {
      return send({
        cookies,
        theme,
        ...ErrorPage({ url, theme, ...props }),
        title: "Error",
      })
    },
  }
}
