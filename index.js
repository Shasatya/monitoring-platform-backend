import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Monitoring Backend Running");
});

server.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});
