import { Router } from "express";
import {
  createWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
} from "../controllers/workExperienceController.js";

const experienceRouter = Router();
experienceRouter.post("/", createWorkExperience);
experienceRouter.put("/:id", updateWorkExperience);
experienceRouter.delete("/:id", deleteWorkExperience);

export default experienceRouter;
