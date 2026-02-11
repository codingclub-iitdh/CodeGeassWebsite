import { NextApiRequest, NextApiResponse } from 'next';
import { LeetCode } from 'leetcode-query';
import { prisma } from '@/prisma/client';
import { Validator } from '@/types/Validator/validator.types';
import { rateLimit } from '@/app/utils/rate-limit';
import { LeetCodeSubmissionData, LeetCodeUserResponse } from "@/types/Members/ld-cd"

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500
});

const leetcode = new LeetCode();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await limiter.check(res, 10, 'CACHE_TOKEN'); // 10 requests per minute
  } catch {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  const submissionData: LeetCodeSubmissionData = req.body;

  // Validate input
  const validation = Validator.validateSubmission(submissionData);
  if (!validation.isValid) {
    return res.status(400).json({
      error: validation.errors.join('; ')
    });
  }

  try {
    // Check for existing roll number
    const existingRollNumber = await prisma.leetCodeLeaderBoard.findUnique({
      where: { rollNumber: submissionData.rollNumber }
    });

    if (existingRollNumber) {
      return res.status(400).json({
        error: 'This roll number is already present on the leaderboard'
      });
    }

    // Check for existing handle
    const existingHandle = await prisma.leetCodeLeaderBoard.findUnique({
      where: { userHandle: submissionData.userHandle }
    });

    if (existingHandle) {
      return res.status(400).json({
        error: 'User with this username already present on the leaderboard'
      });
    }

    // Fetch LeetCode user data
    const user: LeetCodeUserResponse = await leetcode.user(submissionData.userHandle);

    if (!user.matchedUser) {
      return res.status(400).json({
        error: 'No such user found on LeetCode'
      });
    }

    const ranking = user.matchedUser.profile.ranking;
    const points = user.matchedUser.contributions.points;

    // Create new entry
    const newUser = await prisma.leetCodeLeaderBoard.create({
      data: {
        name: submissionData.fullName,
        rollNumber: submissionData.rollNumber,
        userHandle: submissionData.userHandle,
        ranking,
        stars: points
      }
    });

    return res.status(200).json({
      message: 'Successfully added to leaderboard',
      data: {
        ranking,
        stars: points
      }
    });
  } catch (error) {
    console.error('LeetCode submission error:', error);
    return res.status(500).json({
      error: 'Server error, please try again later'
    });
  }
}

// 