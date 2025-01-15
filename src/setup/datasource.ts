/** @format */

import { DataSource } from "typeorm";
import { UserEntity } from "@/entities";
import "dotenv/config";
import { FeedbackEntity } from "@/entities/feedback.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_DATABASE,
  // schema: "public",  
  entities: [UserEntity, FeedbackEntity],
  logging: false,
  synchronize: true,
});
