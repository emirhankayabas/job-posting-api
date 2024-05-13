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
      company_name,
    } = req.body;

    const newPost = new JobPostings({
      position_name,
      position_count,
      position_location,
      position_types,
      position_salary,
      position_description,
      company_id,
      company_name,
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

    try {
      const post = await JobPostings.find({ company_id: id, status: "active" });

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
  getClosedIdPost: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await JobPostings.find({ company_id: id, status: "closed" });

      if (post && post.length > 0) {
        res.status(200).json({
          status: "OK",
          post,
        });
      } else {
        res.status(404).json({ message: "Kapalı iş ilanı bulunamadı." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
      process.exit(1);
    }
  },
  getSearchPost: async (req, res) => {
    const { position_name, position_location } = req.body;

    try {
      const post = await JobPostings.find({
        position_name: { $regex: position_name, $options: "i" },
        position_location: { $regex: position_location, $options: "i" },
        status: "active",
      });

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
  getPendingPosts: async (req, res) => {
    try {
      const posts = await JobPostings.find({ status: "pending" });

      if (posts && posts.length > 0) {
        res.status(200).json({
          status: "OK",
          posts,
        });
      } else {
        res.status(404).json({ message: "Onay bekleyen iş ilanı bulunamadı." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
      process.exit(1);
    }
  },
  getApprovedPosts: async (req, res) => {
    const { id } = req.params;

    try {
      const post = await JobPostings.findByIdAndUpdate(
        id,
        { status: "active" },
        { new: true }
      );

      if (post) {
        res.status(200).json({
          status: "OK",
          message: "İş ilanı onaylandı.",
          post,
        });
      } else {
        res
          .status(404)
          .json({ status: "error", message: "İş ilanı onaylanamadı." });
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
      process.exit(1);
    }
  },
};

export default jobPostings;
