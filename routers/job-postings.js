import express from "express";
const router = express.Router();

import jobPostings from "../controllers/job-postings.js";

router.post("/new", jobPostings.newPost);
router.get("/", jobPostings.getPosts);
router.get("/pending", jobPostings.getPendingPosts);
router.get("/approved/:id", jobPostings.getApprovedPosts);
router.get("/:id", jobPostings.getPostId);
router.get("/closed/:id", jobPostings.getClosedIdPost);
router.post("/search", jobPostings.getSearchPost);

export default router;
