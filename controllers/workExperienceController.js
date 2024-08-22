import WorkExperience from "../models/WorkExperience.js";
import Profile from "../models/Profile.js";

export const createWorkExperience = async (req, res) => {
  try {
    const { profile_id } = req.body;
    const profile = await Profile.findOne({
      _id: profile_id,
      user_id: req.user._id,
    });
    if (!profile) {
      return res.status(403).json({
        message: "K được ủy quyền để tạo cv vào profile!!",
      });
    }

    const workExperience = new WorkExperience(req.body);
    await workExperience.save();
    res.status(201).json(workExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const workExperience = await WorkExperience.findById(id);
    const profile = await Profile.findOne({
      _id: workExperience.profile_id,
      user_id: req.user._id,
    });
    if (!profile) {
      return res
        .status(403)
        .json({ message: "K được ủy quyền để thêm cv vào profile!!" });
    }

    const updatedWorkExperience = await WorkExperience.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json(updatedWorkExperience);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const workExperience = await WorkExperience.findById(id);
    const profile = await Profile.findOne({
      _id: workExperience.profile_id,
      user_id: req.user._id,
    });
    if (!profile) {
      return res
        .status(403)
        .json({ message: "K được ủy quyền để xóa cv ở profile!!" });
    }

    await WorkExperience.findByIdAndDelete(id);
    res.json({ message: "Xóa thành công!!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
