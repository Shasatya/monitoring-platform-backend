import Metric from "../../models/metrics.js";

export const saveMetric = async (serverId, metrics) => {
  try {
    await Metric.create({
      serverId,
      cpu: metrics.cpu,
      memory: metrics.memory,
      requests: metrics.requests,
    });
  } catch (error) {
    console.error("Metric save failed", error);
  }
};
