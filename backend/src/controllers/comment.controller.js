import {
  getAllCommentsByPost,
  createComment,
} from "../services/comment.service.js";

export default class CommentController {
  static async getCommentsByPost(req, res, next) {
    try {
      const { postId } = req.params;
      const comments = await getAllCommentsByPost(postId);

      res.json(comments);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { postId } = req.params;

      await createComment({ user: req.user, postId, data: req.body });
      res.json({ message: "Comentario creado correctamente" });
    } catch (error) {
      next(error);
    }
  }
}
