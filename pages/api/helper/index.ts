import * as jwt from "next-auth/jwt"
import { NextApiRequestCookies } from "next/dist/server/api-utils"

/**
 * Reads the JWT token from the next-auth session cookie, and returns the
 * session object by decoding the token. Returns null if the JWT token is absent
 * or invalid
 */
export async function getSessionFromCookie({
  req,
}: {
  req: { cookies: NextApiRequestCookies }
}) {
  try {
    // The cookie name differs between http and https urls. Also see here:
    // https://github.com/nextauthjs/next-auth/blob/50fe115df6379fffe3f24408a1c8271284af660b/src/core/lib/cookie.ts#L56-L60
    const isSecure = process.env.NEXT_PUBLIC_BASE_URL?.startsWith("https://")
    const cookiePrefix = isSecure ? "__Secure-" : ""
    const sessionToken = req.cookies?.[`${cookiePrefix}next-auth.session-token`]

    // decode will throw when the token is invalid
    const decoded = await jwt.decode({
      token: sessionToken,
      secret: String(process.env.COOKIE_SECRET_KEY),
    })

    if (!decoded) return null

    return 
      decoded
    
  } catch {
    return null
  }
}