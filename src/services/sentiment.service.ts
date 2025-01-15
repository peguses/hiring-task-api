import { FeedBackEntity } from "@/entities/feedback.entity";
import { SentimentService } from "@/enums/sentiment.service.enum";
import { AfinnSentimentStrategy, GoogleSentimentStrategy, VaderSentimentStrategy } from "@/sentiments"
import { createSentimentService } from "@/sentiments/sentiment.strategy.context"
import { AppDataSource } from "@/setup/datasource";
import { FeedBackRequestType } from "@/types";


const selectSentimentService = () => {

    switch(process.env.SENTIMENT_SERVICE) {
        case SentimentService.FINN_SERVICE :
           return  createSentimentService(AfinnSentimentStrategy.process);
        case SentimentService.GOOGLE_SERVICE: 
            return createSentimentService(GoogleSentimentStrategy.process);
        case SentimentService.VADER_SERVICE:
            return createSentimentService(VaderSentimentStrategy.process);
        default: 
            throw `service ${process.env.SENTIMENT_SERVICE} not supported`

    }
}

export const saveSentiment = async (feedback: FeedBackRequestType) :Promise<FeedBackRequestType> => {

    const feedbackRepository = AppDataSource.getRepository(FeedBackEntity);

    const service  = selectSentimentService();
    const score = await service.processComment(feedback.comment);
    const response = await feedbackRepository.save({...feedback, sentimentScore: score});

    return { ...response, uuid: response.uuid };
}