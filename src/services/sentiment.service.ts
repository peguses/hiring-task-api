import { AfinnSentimentStrategy, GoogleSentimentStrategy, VaderSentimentStrategy } from "@/sentiments"
import { createSentimentService } from "@/sentiments/sentiment.strategy.context"

export const saveSentiment = async () => {
    const service1  = createSentimentService(AfinnSentimentStrategy.process);
    await service1.processComment("I hate this product");

    const service2  = createSentimentService(VaderSentimentStrategy.process);
    await service2.processComment("I hate this product");

    const service3  = createSentimentService(GoogleSentimentStrategy.process);
    // await service3.processComment("I hate this product")

    
}