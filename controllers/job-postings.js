import JobPostings from "../models/job-postings.js";

const jobPostings = {
  newPost: async (req, res) => {
    const {
      position_name,
      position_count,
      position_location,
      position_types,
      position_salary,
      position_description,
      company_id,
    } = req.body;

    const newPost = new JobPostings({
      position_name,
      position_count,
      position_location,
      position_types,
      position_salary,
      position_description,
      company_id,
    });

    try {
      const result = await newPost.save();

      if (result) {
        res.status(201).json({
          status: "OK",
          message: "İş ilanı başarılı bir şekilde oluşturuldu.",
          result,
        });
      } else {
        res.status(500).json({ message: "İş ilanı oluşturulamadı." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
      process.exit(1);
    }
  },
  getPosts: async (req, res) => {
    try {
      const posts = await JobPostings.find();

      if (posts) {
        res.status(200).json({
          status: "OK",
          posts,
        });
      } else {
        res.status(404).json({ message: "İş ilanı bulunamadı." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
      process.exit(1);
    }
  },
  getPostId: async (req, res) => {
    const { id } = req.params;

    // posts collection içerisindeki company_id alanına göre arama yapılacak. Eşleşen kayıtların hepsi dönecek.
    try {
      const post = await JobPostings.find({ company_id: id });

      if (post && post.length > 0) {
        res.status(200).json({
          status: "OK",
          post,
        });
      } else {
        res.status(404).json({ message: "İş ilanı bulunamadı." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
      process.exit(1);
    }
  },
};

export default jobPostings;
