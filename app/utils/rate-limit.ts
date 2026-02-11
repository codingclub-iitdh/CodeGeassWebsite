export const rateLimit = ({
    interval,
    uniqueTokenPerInterval = 500
  }: {
    interval: number;
    uniqueTokenPerInterval: number;
  }) => {
    const tokenCache = new Map();
    return {
      check: (res: any, limit: number, token: string) =>
        new Promise<void>((resolve, reject) => {
          const tokenCount = tokenCache.get(token) || [0];
          if (tokenCount[0] === 0) {
            tokenCache.set(token, tokenCount);
          }
          tokenCount[0] += 1;
  
          const currentUsage = tokenCount[0];
          const isRateLimited = currentUsage >= limit;
  
          setTimeout(() => {
            tokenCount[0] = 0;
          }, interval);
  
          isRateLimited ? reject() : resolve();
        }),
    };
  };