import { sentimentController } from "@/controllers";
import { validationRules } from "@/types/feedback.type";
import { Router } from "express";

export const sentimentRouter = Router();

sentimentRouter.post(
  "/feedbacks",
  validationRules,
  sentimentController.postFeedback
);

sentimentRouter.get("/feedbacks", sentimentController.getFeedbacks);
