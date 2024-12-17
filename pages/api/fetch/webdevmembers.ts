import { prisma } from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    let webdev_ppl

    try {
      webdev_ppl = await prisma.webDev.findMany({
        select: {
          member: {
            select: {
              name: true,
              roll_number: true,
            },
          },
          // Assuming there's a field like github_uname in webDev schema
          github_uname: true,
        },
      })
    } catch (error) {
      return res.status(400).json({
        errorMessage:
          'We have a problem with our database, please try again after some time',
      })
    }

    return res.status(200).json({
      webdev: JSON.stringify(webdev_ppl, (key, value) => {
        return typeof value === 'bigint' ? value.toString() : value
      }),
    })
  }
  return res.status(404).json('Unknown endpoint')
}
