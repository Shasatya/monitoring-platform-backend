import Metric from "../models/metrics.js";

export const getServerMetrics = async (req, res) => {
  const { serverId } = req.params;

  const metrics = await Metric.find({ serverId })
    .sort({ createdAt: -1 })
    .limit(100);

  res.json(metrics);
};
