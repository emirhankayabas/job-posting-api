import Auth from "../models/auth.js";
import Companys from "../models/companys.js";

const companys = {
  new: async (req, res) => {
    const {
      user_id,
      company_name,
      company_count,
      company_username,
      company_manager,
      company_phone,
    } = req.body;

    const createdCompany = await Companys.create({
      user_id,
      company_name,
      company_count,
      company_username,
      company_manager,
      company_phone,
    });

    await Auth.findOneAndUpdate(
      { _id: user_id },
      {
        $set: {
          company_id: createdCompany._id,
          user_type: "company",
        },
      }
    );

    return res.status(200).json({
      status: "OK",
      message: "İşveren başarıyla oluşturuldu.",
      data: createdCompany,
    });
  },
};

export default companys;
