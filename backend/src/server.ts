import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
