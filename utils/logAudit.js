import Audit from "../models/audit.js";

export const logAudit = async ({
  userId,
  action,
  resource,
  resourceId,
  metadata,
}) => {
  try {
    await Audit.create({
      userId,
      action,
      resource,
      resourceId,
      metadata,
    });
  } catch (error) {
    console.error("Audit log failed:", error);
  }
};
