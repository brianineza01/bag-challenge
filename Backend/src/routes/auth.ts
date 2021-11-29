import { Router } from "express";
import { userSignUp, userLogin } from "../controllers/auth";

const router = Router();

router.post("/login", userLogin);

router.post("/signup", userSignUp);

export default router;
