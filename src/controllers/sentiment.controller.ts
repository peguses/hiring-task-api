import { sentimentService } from "@/services";
import { saveSentiment } from "@/services/sentiment.service";
import { errorHandlerWrapper } from "@/utils";
import { Request, Response } from "express";

const handlePostSentiment = async (req: Request, res: Response) => {
  await sentimentService.saveSentiment();
  return res.status(200).json({ run: "true" });
};


export const postSentiment = errorHandlerWrapper(handlePostSentiment);
