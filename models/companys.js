import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    company_name: {
      type: String,
      required: true,
    },
    company_count: {
      type: String,
    },
    company_username: {
      type: String,
      required: true,
    },
    company_manager: {
      type: String,
    },
    company_phone: {
      type: String,
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

const Companys = mongoose.model("Companys", CompanySchema, "companys");
export default Companys;
