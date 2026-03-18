import { createAlert, resolveAlert } from "./service.js";

export const checkAlerts = async (io, serverId, metrics) => {
  if (metrics.cpu > 80) {
    const alert = await createAlert({
      serverId,
      type: "CPU_HIGH",
      severity: "warning",
      message: "CPU usage above 80%",
    });

    io.emit("alert-created", alert);
  } else {
    const resolved = await resolveAlert({
      serverId,
      type: "CPU_HIGH",
    });

    if (resolved) {
      io.emit("alert-resolved", resolved);
    }
  }

  if (metrics.memory > 90) {
    const alert = await createAlert({
      serverId,
      type: "MEMORY_HIGH",
      severity: "critical",
      message: "Memory usage above 90%",
    });

    io.emit("alert-created", alert);
  } else {
    const resolved = await resolveAlert({
      serverId,
      type: "MEMORY_HIGH",
    });

    if (resolved) {
      io.emit("alert-resolved", resolved);
    }
  }
};
