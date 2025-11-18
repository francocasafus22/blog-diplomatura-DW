import { createPost, findPostsByUser } from "../services/postService.js";

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
      await createPost(req.body, req.user);
      res.status(201).json({ message: "Post creado correctamente" });
    } catch (error) {
      next(error);
    }
  }
}
