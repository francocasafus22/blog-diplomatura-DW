import { Router } from "express";
import PostController from "../controllers/post.controller.js";
import authMiddleware, { optionalAuthMiddleware } from "../middlewares/auth.middleware.js";
import { validatePostExist } from "../middlewares/post.middleware.js";

const router = Router();

router.get("/user/:username", PostController.getAllByUsername);
router.post("/like/:postId", validatePostExist, authMiddleware, PostController.likePost);
router.get("/all",optionalAuthMiddleware, PostController.getAll)
router.get("/:slug", validatePostExist, PostController.getOne)
router.post("/", authMiddleware, PostController.create);
router.put("/:postId", authMiddleware, validatePostExist, PostController.edit);
router.delete(
  "/:postId",
  authMiddleware,
  validatePostExist,

  PostController.delete,
);

export default router;
