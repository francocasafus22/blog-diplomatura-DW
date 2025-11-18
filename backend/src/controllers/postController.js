import { getAll } from "../services/postService.js";

export default class PostController {
  static async getAll(req, res, next) {
    try {
      const posts = await getAll();
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
