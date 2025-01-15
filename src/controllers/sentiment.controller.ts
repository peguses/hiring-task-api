
import { feedbackService } from "@/services";
import { FeedBackRequestType } from "@/types";
import { errorHandlerWrapper } from "@/utils";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

const handlePostFeedback = async (req: Request, res: Response) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const feedBack: FeedBackRequestType = req.body;

  const response  = await feedbackService.saveFeedback(feedBack);
  
  return res.status(200).json({ ...response });
};

const handleGetFeedbacks = async(req: Request, res: Response) => {

  const page = parseInt(req.query.page as string) || 1;

  const limit = parseInt(req.query.limit as string) || 10;

  const searchKey = req.query.searchKey as string || '';

  const searchValue = req.query.searchValue as string || '';

  const feedbacks =  await feedbackService.getFeedbacks(page, limit, searchKey, searchValue);

  return res.status(200).json({...feedbacks})

}


export const postFeedback = errorHandlerWrapper(handlePostFeedback);

export const getFeedbacks = errorHandlerWrapper(handleGetFeedbacks);
