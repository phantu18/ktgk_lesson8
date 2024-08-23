import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token không hợp lệ" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, "Pat");
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Xác thực không thành công" });
  }
};

export default authMiddleware;
