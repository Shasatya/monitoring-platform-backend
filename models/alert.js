import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  serverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
  },

  type: {
    type: String,
  },

  severity: {
    type: String,
    enum: ["info", "warning", "critical"],
  },

  message: {
    type: String,
  },

  resolved: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Alert", alertSchema);
