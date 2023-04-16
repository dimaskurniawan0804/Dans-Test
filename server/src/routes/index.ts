import { Router } from "express";
import UserRouter from "./RUsers";
import JobRouter from "./RJob";

const router = Router();
router.use("/users", UserRouter);
router.use("/jobs", JobRouter);

export default router;
