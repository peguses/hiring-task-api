/** @format */

import express from "express";
import { authRouter } from "./auth.router";
import { sentimentRouter } from "./sentiment.router";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/", sentimentRouter);

export default router;
