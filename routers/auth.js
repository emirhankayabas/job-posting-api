import express from "express";
const router = express.Router();

import auth from "../controllers/auth.js";

router.post("/login", auth.login);
router.post("/register", auth.register);
router.post("/google", auth.google);
router.post("/facebook", auth.facebook);

export default router;