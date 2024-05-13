import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    user_surname: {
      type: String,
      required: true,
      trim: true,
    },
    user_email: {
      type: String,
      required: true,
      unique: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_type: {
      type: String,
      default: "user",
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companys",
      default: null,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "applications",
      },
    ],
    status: {
      type: String,
      enum: ["active", "passive"],
      default: "active",
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

const Auth = mongoose.model("Auth", AuthSchema, "users");
export default Auth;
