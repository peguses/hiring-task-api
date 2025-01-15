import { FeedBackEntity } from "@/entities/feedback.entity";
import { AfinnSentimentStrategy, GoogleSentimentStrategy, VaderSentimentStrategy } from "@/sentiments"
import { createSentimentService } from "@/sentiments/sentiment.strategy.context"
import { AppDataSource } from "@/setup/datasource";
import { FeedBackRequestType } from "@/types";

export const saveSentiment = async (feedback: FeedBackRequestType) => {

    const feedbackRepository = AppDataSource.getRepository(FeedBackEntity);

    const afinnService  = createSentimentService(AfinnSentimentStrategy.process);
    await afinnService.processComment(feedback.comment);

    const vaderService  = createSentimentService(VaderSentimentStrategy.process);
    await vaderService.processComment(feedback.comment);

    const googleService  = createSentimentService(GoogleSentimentStrategy.process);
    await googleService.processComment(feedback.comment)

    feedbackRepository.save({...feedback, sentimentScore: 12});


}