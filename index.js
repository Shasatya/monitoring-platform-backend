import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import { startMetricsEngine } from "./services/metrics/engine.js";
import { startStatusEngine } from "./services/status/engine.js";

import { serverRoutes } from "./routes/server.js";
import { authRoutes } from "./routes/auth.js";
import { alertRoutes } from "./routes/alert.js";
import { metricsRoutes } from "./routes/metrics.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/servers", serverRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/metrics", metricsRoutes);

connectDB();
startStatusEngine();

const PORT = process.env.PORT || 5000;

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("Monitoring Backend Running");
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

server.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
  startMetricsEngine(io);
});
