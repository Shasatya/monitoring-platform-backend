import mongoose from "mongoose";

const metricSchema = new mongoose.Schema({
  serverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Server",
  },

  cpu: Number,

  memory: Number,

  requests: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Metric", metricSchema);
