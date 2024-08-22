import { Router } from "express";
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController.js";

const profileRouter = Router();
profileRouter.get("/:id", getProfile);
profileRouter.post("/", createProfile);
profileRouter.put("/:id", updateProfile);
profileRouter.delete("/:id", deleteProfile);

export default profileRouter;
