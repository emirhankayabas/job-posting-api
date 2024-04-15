import express from "express";
import companys from "../controllers/companys.js";

const router = express.Router();

router.post("/new", companys.new);

export default router;
