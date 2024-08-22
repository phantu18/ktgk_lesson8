import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, "secretKey");
    req.user = await User.findById(decoded.userId);
    if (!req.user) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Chưa xác định token!!" });
  }
};

export default authMiddleware;
