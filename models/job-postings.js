import mongoose from "mongoose";

const jobPostingsSchema = new mongoose.Schema(
  {
    position_name: {
      type: String,
      required: true,
    },
    position_count: {
      type: String,
      required: true,
    },
    position_location: {
      type: String,
      required: true,
    },
    position_types: {
      type: String,
      required: true,
    },
    position_salary: {
      type: Number,
    },
    position_description: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_id: {
      type: String,
      required: true,
      ref: "companys",
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "applications",
      },
    ],
    status: {
      type: String,
      enum: ["active", "pending", "passive", "closed"],
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

const JobPostings = mongoose.model("JobPostings", jobPostingsSchema, "posts");
export default JobPostings;
