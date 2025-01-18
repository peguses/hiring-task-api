import { Request, Response, NextFunction } from "express";
import "dotenv/config";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.user?.isAdmin) {
    res.status(403).json({ message: "Access denied. Admins only." });
    return;
  }

  next();
};
