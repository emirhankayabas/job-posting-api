import Auth from "../models/auth.js";
import Companys from "../models/companys.js";
import sendMail from "../utils/mail-sender.js";

const companys = {
  new: async (req, res) => {
    const {
      user_id,
      user_email,
      company_name,
      company_count,
      company_username,
      company_manager,
      company_phone,
    } = req.body;

    const createdCompany = await Companys.create({
      user_id,
      user_email,
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

    const message = `
      Merhaba, <br> <br>

      Yeni bir işveren hesabı başarıyla oluşturuldu! Bu, platformumuza hoş geldiniz demek. İşveren hesabınızı kullanarak iş ilanları oluşturabilir, iş başvurularını yönetebilir ve iş arayanlarla iletişime geçebilirsiniz. <br> <br>
      
      Aşağıdaki bilgiler, hesabınıza erişim sağlamanızı sağlayacak: <br> <br> 
      
      E-posta Adresi: ${user_email} <br>
      Şirket Adı: ${company_name} <br>
      Şirket Adresi: ${company_count} <br> <br>
      
      Herhangi bir sorunuz veya sorununuz varsa, lütfen çekinmeden bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız. <br> <br>
      
      İyi günler dileriz, MovieJump Ekibi.
    `;

    sendMail(user_email, "Yeni İşveren Oluşturuldu", message);

    return res.status(200).json({
      status: "OK",
      message: "İşveren başarıyla oluşturuldu.",
      data: createdCompany,
    });
  },
};

export default companys;
