import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { verifyToken } from "../helpers/tokenHelper";

dotenv.config();

const verifyRequestToken = (req: Request, res: Response, next: any) => {
  const token = req.headers.token || req.params.token;
  if (!token) {
    return res.status(401).json({ error: "Please log in or Register" });
  }
  if (typeof token !== "string")
    return res.status(401).json({ error: "Unknown token" });

  const user = verifyToken(token);
  if (user.status !== "success")
    return res.status(401).json({ error: user.error });

  req.user = user.user;
  next();
};

export default verifyRequestToken;
