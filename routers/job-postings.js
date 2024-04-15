import express from "express";
const router = express.Router();

import jobPostings from "../controllers/job-postings.js";

router.get("/", jobPostings.getPosts);
router.get("/:id", jobPostings.getPostId);
router.post("/new", jobPostings.newPost);

export default router;
