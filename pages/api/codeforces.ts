import { NextApiRequest, NextApiResponse } from 'next';
import { CodeForcesAPI } from 'codeforces-api-ts';
import { prisma } from '@/prisma/client';
import { Validator } from '@/types/Validator/validator.types';
import { rateLimit } from '@/app/utils/rate-limit';
import { CodeforcesSubmissionData, CodeforcesUserResponse } from '@/types/Members/ld-cd';

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await limiter.check(res, 10, 'CACHE_TOKEN');
  } catch {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }

  const submissionData: CodeforcesSubmissionData = req.body;

  // Validate input
  const validation = Validator.validateSubmission(submissionData);
  if (!validation.isValid) {
    return res.status(400).json({
      error: validation.errors.join('; ')
    });
  }

  try {
    // Check for existing roll number
    const existingRollNumber = await prisma.codeforcesLeaderBoard.findUnique({
      where: { rollNumber: submissionData.rollNumber }
    });

    if (existingRollNumber) {
      return res.status(400).json({
        error: 'This roll number is already present on the leaderboard'
      });
    }

    // Check for existing handle
    const existingHandle = await prisma.codeforcesLeaderBoard.findUnique({
      where: { userHandle: submissionData.userHandle }
    });

    if (existingHandle) {
      return res.status(400).json({
        error: 'User with this username already present on the leaderboard'
      });
    }

    // Fetch Codeforces user data
    const userData: CodeforcesUserResponse = await CodeForcesAPI.user.rating({
      handle: submissionData.userHandle
    });

    if (!userData.result || userData.result.length === 0) {
      return res.status(400).json({
        error: 'User has not participated in any contests'
      });
    }

    const numContests = userData.result.length;
    const lastContest = userData.result[numContests - 1].contestId;
    const rating = userData.result[numContests - 1].newRating;

    // Create new entry
    const newUser = await prisma.codeforcesLeaderBoard.create({
      data: {
        name: submissionData.fullName,
        rollNumber: submissionData.rollNumber,
        userHandle: submissionData.userHandle,
        rating,
        contests: numContests,
        last_contest_id: lastContest
      }
    });

    return res.status(200).json({
      message: 'Successfully added to leaderboard',
      data: {
        rating,
        contests: numContests,
        lastContestId: lastContest
      }
    });
  } catch (error) {
    console.error('Codeforces submission error:', error);
    return res.status(500).json({
      error: 'Server error, please try again later'
    });
  }
}

// utils/rate-limit.ts
