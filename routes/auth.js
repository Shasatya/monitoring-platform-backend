import express from "express";
import { register, login, refreshToken } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);

export const authRoutes = router;
