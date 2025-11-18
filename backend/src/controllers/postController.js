import { findPostsByUser } from "../services/postService.js";

export default class PostController {
  static async getAllByUser(req, res, next) {
    try {
      const posts = await findPostsByUser(req.user._id);
      res.json({ posts });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
