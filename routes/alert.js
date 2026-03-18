import express from "express";
import { getAlerts } from "../controllers/alert.js";

const router = express.Router();

router.get("/", getAlerts);

export const alertRoutes = router;
