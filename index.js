import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import workExperienceRoutes from "./routes/workExperienceRoutes.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/ktgk");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/work-experience", workExperienceRoutes);

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});
