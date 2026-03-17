import mongoose from "mongoose";

const ServerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    ip: {
      type: String,
      required: true,
    },

    environment: {
      type: String,
      default: "production",
    },

    status: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },

    lastHeartbeat: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Server", ServerSchema);
