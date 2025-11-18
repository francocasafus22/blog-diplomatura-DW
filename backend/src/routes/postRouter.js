import { Router } from "express";
import PostController from "../controllers/postController.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", authMiddleware, PostController.getAllByUser);

export default router;
