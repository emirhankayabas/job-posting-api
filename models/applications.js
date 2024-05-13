import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    post_detail: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    collation: {
      locale: "tr",
      strength: 2,
    },
  }
);

const Application = mongoose.model(
  "Application",
  ApplicationSchema,
  "applications"
);
export default Application;
