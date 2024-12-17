import e from 'express'
import prisma from './prismaClient'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {
        name,
        roll_number,
        wing,
        github_id,
        role,
        leetCode_id,
        codeForces_id,
      } = req.body

      const newMember = await prisma.members.create({
        data: {
          name,
          roll_number,
          wing,
        },
      })

      // Handle different wings and create related entries
      if (wing === 'FOSS') {
        await prisma.fOSS.create({
          data: {
            github_uname: github_id,
            member_id: newMember.id,
          },
        })
      } else if (wing === 'GAME_DEV') {
        await prisma.gameDev.create({
          data: {
            role,
            member_id: newMember.id,
          },
        })
      } else if (wing === 'CP') {
        if (leetCode_id) {
          await prisma.leetcode.create({
            data: {
              handle: leetCode_id,
              member_id: newMember.id,
            },
          })
        }
        if (codeForces_id) {
          await prisma.codeforces.create({
            data: {
              handle: codeForces_id,
              member_id: newMember.id,
            },
          })
        }
      } else if (wing === 'WEB_DEV') { // New case for Web Development
        await prisma.webDev.create({
          data: {
            github_uname: github_id, // Assuming you want to capture the GitHub username here
            member_id: newMember.id,
          },
        })
      }

      res.status(201).json(newMember)
    } catch (error) {
      console.error('Error adding member:', error)
      res.status(500).json({ error: 'Could not add member' })
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query
      if (!id) {
        return res.status(400).json({ error: 'Missing member ID' })
      }

      const existingMember = await prisma.members.findUnique({
        where: { id },
      })

      if (!existingMember) {
        return res.status(404).json({ error: 'Member not found' })
      }

      await prisma.members.delete({
        where: { id },
      })

      res.status(204).end()
    } catch (error) {
      console.error('Error deleting member:', error)
      res.status(500).json({ error: 'Could not delete member' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
