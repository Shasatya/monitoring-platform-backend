import express from "express";
import { getServerMetrics } from "../controllers/metrics.js";

const router = express.Router();

router.get("/:serverId", getServerMetrics);

export const metricsRoutes = router;
