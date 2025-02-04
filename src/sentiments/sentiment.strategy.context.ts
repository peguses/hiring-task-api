export interface IScore {
  comment: string,
  score: number
}

type SentimentStrategy = (comment: string) => Promise<number>;

export const createSentimentService = (
  sentimentStrategy: SentimentStrategy
) => {
  return {
    processComment: async (comment: string) => sentimentStrategy(comment),
    setPaymentStrategy: (newStrategy: SentimentStrategy) => {
      return createSentimentService(newStrategy);
    },
  };
};
