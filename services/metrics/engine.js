import server from "../../models/server.js";
import { checkAlerts } from "../alert/engine.js";
import { generateMetrics } from "./generator.js";
import { saveMetric } from "./service.js";

const emitServerMetrics = async (io) => {
  try {
    const servers = await server.find();

    for (const server of servers) {
      const status = randomStatus();

      await Server.findByIdAndUpdate(server._id, { status });

      const metrics = generateMetrics();

      io.emit("metrics-update", {
        serverId: server._id,
        status,
        metrics,
      });

      if (status === "offline") {
        io.emit("server-offline", {
          serverId: server._id,
          message: `${server.name} is offline`,
        });
      }

      await checkAlerts(io, server._id, metrics);
      await checkAlerts(io, server._id, metrics);
    }
  } catch (error) {
    console.error("Metrics Engine Error:", error);
  }
};

const randomStatus = () => {
  const random = Math.random();

  if (random < 0.1) return "offline";

  return "online";
};

export const startMetricsEngine = (io) => {
  setInterval(() => {
    emitServerMetrics(io);
  }, 2000);
};
