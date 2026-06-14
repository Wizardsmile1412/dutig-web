import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware.ts` to `proxy.ts`. The middleware is driven by
// the shared routing config so it never drifts from request.ts / the layout.
export default createMiddleware(routing);

export const config = {
  // Skip API, Next internals, and anything with a file extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
