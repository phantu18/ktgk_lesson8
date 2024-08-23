import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createProfile = async (req, res) => {
  try {
    const profile = new Profile({ ...req.body });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!profile) {
      return res.status(403).json({ message: "Not authorized" });
    }
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndDelete({
      _id: req.params.id,
    });
    if (!profile) {
      return res.status(403).json({ message: "Not authorized" });
    }
    res.json({ message: "Xóa Profile thành công??" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
