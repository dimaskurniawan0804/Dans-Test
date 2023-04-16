import { Router } from "express";
import {
  addJob,
  findAllJobs,
  findJobsByQuery,
  findJobById,
} from "../controllers/CJobs";

const router = Router();
router.post("/", addJob);
router.get("/", findAllJobs);
router.get("/options", findJobsByQuery);
router.get("/:id", findJobById);

export default router;
