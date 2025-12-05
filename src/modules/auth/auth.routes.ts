import { Router } from "express";
import { authController } from "./auth.controllers";

const router = Router();

router.post("/login", authController.loginUser);

export const authRoutes = router;
