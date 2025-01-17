import { body } from "express-validator";

export type FeedBackType = {
  uuid: string;
  customerName?: string;
  customerEmail?: string;
  comment: string;
};

export const validationRules = [
  body("customerName")
    .isAlpha()
    .withMessage("Name can contains alphabetical characters only")
    .trim(),
  body("customerEmail").isEmail().withMessage("Email format should be valid"),
  body("comment")
    .isString()
    .withMessage("Comment should be a text")
    .notEmpty()
    .withMessage("comment is required")
    .isLength({ max: 1000, min: 20 })
    .withMessage("Comment should be under min 20 and max 1000 characters"),
];
