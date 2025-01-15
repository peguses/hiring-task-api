
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "./core.entity";

@Entity({ name: "feed_back" })
export class FeedbackEntity extends CoreEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({name: "customer_name",  nullable: true})
  customerName: string;

  @Column({name: "customer_email",  nullable: true})
  customerEmail: string;

  @Column({ name: "comment" })
  comment: string;

  @Column({name: "sentiment_score", nullable: true})
  sentimentScore: number;
}
