import { AfinnSentimentService } from "@/sentiments"
import { createSentimentService } from "@/sentiments/sentiment.strategy.context"

export const saveSentiment = async () => {
    const service  = createSentimentService(AfinnSentimentService.process);
    await service.processComment("I love this product")
}