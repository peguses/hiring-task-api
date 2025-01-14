/** @format */

import express from "express";
import { authRouter } from "./auth.router";
import { sentimentRouter } from "./sentiment.router";
import { authMiddleware } from "@/middlewares";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/", authMiddleware, sentimentRouter);

export default router;
