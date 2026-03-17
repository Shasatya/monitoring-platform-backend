import express from "express";
import {
  createServer,
  deleteServer,
  getAllServers,
  getServerById,
} from "../controllers/server.js";

const router = express.Router();

router.post("/createServer", createServer);
router.get("/getAllServers", getAllServers);
router.get("/getServer/:id", getServerById);
router.delete("/deleteServer/:id", deleteServer);

export const serverRoutes = router;
