import express from "express";
import {
  createServer,
  deleteServer,
  getAllServers,
  getServerById,
} from "../controllers/server.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/createServer", protect, createServer);
router.get("/getAllServers", protect, getAllServers);
router.get("/getServer/:id", protect, getServerById);
router.delete("/deleteServer/:id", protect, deleteServer);

// router.post("/", protect, authorize("admin"), createServer);

export const serverRoutes = router;
