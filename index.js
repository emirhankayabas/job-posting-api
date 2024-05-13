import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDatabase from "./config/database.js";

import jobPostingsRouter from "./routers/job-postings.js";
import authRouter from "./routers/auth.js";
import companysRouter from "./routers/companys.js";
import applicationsRouter from "./routers/applications.js";

const app = express();
connectDatabase();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const PORT = process.env.PORT || 3000;

app.use("/job-postings", jobPostingsRouter);
app.use("/auth", authRouter);
app.use("/companys", companysRouter);
app.use("/applications", applicationsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} üzerinden dinleniyor.`);
});
