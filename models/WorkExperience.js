import mongoose from "mongoose";

const WorkExperienceSchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  role: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

export default mongoose.model("WorkExperience", WorkExperienceSchema);
