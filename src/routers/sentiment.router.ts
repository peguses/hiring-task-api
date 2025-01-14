import { sentimentController } from "@/controllers";
import { Router } from "express";

export const sentimentRouter = Router();

sentimentRouter.post("/sentiments", sentimentController.postSentiment)