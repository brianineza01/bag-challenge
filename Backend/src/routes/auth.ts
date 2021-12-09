import { Router } from "express";
import { userSignUp, userLogin } from "../controllers/auth";

const router = Router();

router.post("/login", userLogin);

router.post("/signup", userSignUp);

router.use("*", (req, res) => {
  res.status(404).send({ error: "page not found" });
});
export default router;
