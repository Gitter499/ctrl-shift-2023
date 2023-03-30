import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"

import { authOptions } from "src/app/api/auth/[...nextauth]"

export function withAuthentication(handler: NextApiHandler) {

  return async function (req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)

  

    if (!session) {
      return res.status(403).json({ error: {
        message: `You are not authorized to access ${req.url}`,
        metadata: {
          code: 403,
          body: req.body,
        }
      } })
    }

    return handler(req, res)
  }
}