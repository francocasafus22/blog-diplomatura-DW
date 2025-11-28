import { Router } from "express";
import CommentController from "../controllers/comment.controller.js";
import { param } from "express-validator";
import errorInputHandler from "../middlewares/validation.middleware.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import {validatePostExist} from "../middlewares/post.middleware.js"

const router = Router();

router.get(
  "/:postId",
  param("postId").isMongoId().withMessage("El ID no es válido"),
  errorInputHandler,
  validatePostExist,
  CommentController.getCommentsByPost,
);

router.post(
  "/:postId",
  param("postId").isMongoId().withMessage("El ID no es válido"),
  errorInputHandler,
  authMiddleware,
  CommentController.create,
);

export default router;
