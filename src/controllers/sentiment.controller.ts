
import { sentimentService } from "@/services";
import { FeedBackRequestType } from "@/types";
import { errorHandlerWrapper } from "@/utils";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

const handlePostSentiment = async (req: Request, res: Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const feedBack: FeedBackRequestType = req.body

  await sentimentService.saveSentiment(feedBack);
  return res.status(200).json({ run: "true" });
};


export const postSentiment = errorHandlerWrapper(handlePostSentiment);
