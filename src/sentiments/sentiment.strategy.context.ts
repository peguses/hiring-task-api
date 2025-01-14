type SentimentStrategy = (comment: string) => void;

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
