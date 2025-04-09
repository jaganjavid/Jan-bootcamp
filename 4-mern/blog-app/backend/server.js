import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"


const app = express();


dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working fine!");
});

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Test server running at http://localhost:${process.env.PORT}`);
});
