import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  birth_place: { type: String, required: true },
  nationality: { type: String, required: true },
  education: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Profile", ProfileSchema);
