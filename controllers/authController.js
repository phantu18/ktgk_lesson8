import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = new User({ userName, password });
    await user.save();
    res.status(201).json({ message: "Tạo Tài Khoản Thành Công!!!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: "Thông Tin Không Xác Định!!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Thông Tin Không Xác Định!!" });
    }
    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  res.status(200).json({ message: "Tài Khoản Đã Đăng Xuất !!!" });
};
