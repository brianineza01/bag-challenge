import { Router } from "express";
import { userSignUp } from "../controllers/auth";

const router = Router();

router.get("/login", (req, res) => {
  res.status(200);
  res.send({ message: "route" });
});

router.post("/signup", userSignUp);

export default router;
