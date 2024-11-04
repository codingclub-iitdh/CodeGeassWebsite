export interface LeetCodeSubmissionData {
    fullName: string;
    rollNumber: string;
    userHandle: string;
  }
  
  export interface LeetCodeUserResponse {
    matchedUser: {
      profile: {
        ranking: number;
      };
      contributions: {
        points: number;
      };
    } | null;
  }
  
  export interface CodeforcesSubmissionData {
    fullName: string;
    rollNumber: string;
    userHandle: string;
  }
  
  export interface CodeforcesUserResponse {
    result?: {
      contestId: number;
      newRating: number;
    }[];
  }
  
  