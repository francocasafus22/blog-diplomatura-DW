import { Router } from "express";
import PostController from "../controllers/postController.js";

const router = Router();

router.get("/", PostController.getAll);

export default router;
