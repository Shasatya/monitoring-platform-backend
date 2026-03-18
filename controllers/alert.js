import Alert from "../models/alert.js";

export const getAlerts = async (req, res) => {
  const alerts = await Alert.find()
    .populate("serverId", "name")
    .sort({ createdAt: -1 });

  res.json(alerts);
};
