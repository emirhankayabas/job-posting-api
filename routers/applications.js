import express from "express";
const router = express.Router();

import applications from "../controllers/applications.js";

router.post("/apply", applications.apply);

export default router;