import { FeedbackEntity } from "@/entities/feedback.entity";
import { FeedBackSearchKey } from "@/enums/feedback.search.enum";
import { SentimentService } from "@/enums/sentiment.service.enum";
import {
  AfinnSentimentStrategy,
  GoogleSentimentStrategy,
  VaderSentimentStrategy,
} from "@/sentiments";
import { createSentimentService } from "@/sentiments/sentiment.strategy.context";
import { AppDataSource } from "@/setup/datasource";
import { FeedBackRequestType } from "@/types";
import { PaginatedResponseType } from "@/types/paginated.response.type";

const selectSentimentService = () => {
  switch (process.env.SENTIMENT_SERVICE) {
    case SentimentService.FINN_SERVICE:
      return createSentimentService(AfinnSentimentStrategy.process);
    case SentimentService.GOOGLE_SERVICE:
      return createSentimentService(GoogleSentimentStrategy.process);
    case SentimentService.VADER_SERVICE:
      return createSentimentService(VaderSentimentStrategy.process);
    default:
      throw `service ${process.env.SENTIMENT_SERVICE} not supported`;
  }
};

export const saveFeedback = async (
  feedback: FeedBackRequestType
): Promise<FeedBackRequestType> => {
  const feedbackRepository = AppDataSource.getRepository(FeedbackEntity);

  const service = selectSentimentService();
  const score = await service.processComment(feedback.comment);
  const response = await feedbackRepository.save({
    ...feedback,
    sentimentScore: score,
  });

  return { ...response, uuid: response.uuid };
};

export const getFeedbacks = async (
  page: number = 1,
  limit: number = 10,
  searchKey: string,
  searchValue: string
): Promise<PaginatedResponseType<FeedBackRequestType>> => {
  
  if (!Object.values(FeedBackSearchKey).includes(searchKey as FeedBackSearchKey)) {
      throw `query param ${searchKey} not supported`
  }

  const feedbackRepository = AppDataSource.getRepository(FeedbackEntity);

  const skip = (page - 1) * limit;

  const query = feedbackRepository.createQueryBuilder("feed_back");

  if (searchKey && searchValue) {
    query.where(`feed_back.${searchKey} LIKE :value`, {
      value: `%${searchValue}%`,
    });
  }

  query.skip(skip).take(limit);

  const [items, totalCount] = await query.getManyAndCount();

  const totalPages = Math.ceil(totalCount / limit);

  return {
    page,
    limit,
    totalCount,
    totalPages,
    data: [...items],
  };
};
