// This is an example of to protect an API route
import { getServerSession } from "next-auth/next"
import { options as authOptions } from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    const userInfo = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        groups: true,
      },
    })
    console.log(userInfo)
    return res.send({
      content: userInfo.groups,
    })
  } else {
    return res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}
