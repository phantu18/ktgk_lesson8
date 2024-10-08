import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_id: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export default mongoose.model("User", UserSchema);
