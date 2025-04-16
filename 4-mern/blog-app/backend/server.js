import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"

import cookieParser from "cookie-parser";


const app = express();


dotenv.config();

connectDB();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Working fine!");
});

app.use("/uploads", express.static("uploads"))
app.use("/api/auth", authRoutes)
app.use("/api/blog", blogRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Test server running at http://localhost:${process.env.PORT}`);
});
