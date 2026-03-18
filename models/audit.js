import mongoose from "mongoose";

const audit = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  action: {
    type: String,
    required: true,
  },

  resource: {
    type: String,
  },

  resourceId: {
    type: mongoose.Schema.Types.ObjectId,
  },

  metadata: {
    type: Object,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Audit", audit);
