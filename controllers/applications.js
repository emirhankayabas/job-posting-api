import Application from "../models/applications.js";
import Auth from "../models/auth.js";
import JobPostings from "../models/job-postings.js";

const applications = {
  apply: async (req, res) => {
    try {
      const { user_id, post_id, post_detail } = req.body;

      // Kullanıcının bu ilana daha önce başvuru yapıp yapmadığını kontrol et
      const existingApplication = await Application.findOne({
        user_id,
        post_id,
      });

      if (existingApplication) {
        res.status(400).json({
          status: "error",
          message: "Zaten bu iş ilanına başvurdunuz.",
        });
        return;
      }

      // Yeni başvuruyu oluştur ve kaydet
      const application = new Application({
        user_id,
        post_id,
        post_detail,
      });

      await application.save();

      // Kullanıcıya başvuruyu ekle
      const user = await Auth.findById(user_id);
      const existingApplications = user.applications || [];
      existingApplications.push(application);
      user.applications = existingApplications;
      await user.save();

      // post koleksiyonundaki ilanın applications kısmına user_id'yi ekle
      const post = await JobPostings.findById(post_id);
      const existingPostApplications = post.applications || [];
      existingPostApplications.push(user_id);
      post.applications = existingPostApplications;
      await post.save();

      res.status(201).json({ status: "OK", message: "Başarılı", data: application });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  },
};

export default applications;