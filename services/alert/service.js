import Alert from "../../models/alert.js";

export const createAlert = async ({ serverId, type, severity, message }) => {
  const existingAlert = await Alert.findOne({
    serverId,
    type,
    resolved: false,
  });

  if (existingAlert) {
    return existingAlert;
  }

  const alert = await Alert.create({
    serverId,
    type,
    severity,
    message,
  });

  return alert;
};

export const resolveAlert = async ({ serverId, type }) => {
  const alert = await Alert.findOne({
    serverId,
    type,
    resolved: false,
  });

  if (!alert) return;

  alert.resolved = true;

  await alert.save();

  return alert;
};
