import { sentimentController } from "@/controllers";
import { authMiddleware, isAdmin } from "@/middlewares";
import { validationRules } from "@/types/feedback.type";
import { Router } from "express";

export const sentimentRouter = Router();

sentimentRouter.post(
  "/feedbacks",
  validationRules,
  sentimentController.postFeedback
);

sentimentRouter.get("/feedbacks", authMiddleware, isAdmin, sentimentController.getFeedbacks);

sentimentRouter.get("/feedbacks/statistics", authMiddleware, isAdmin, sentimentController.getFeedbacksStatistics);
