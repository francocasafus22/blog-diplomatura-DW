import Post from "../models/Post.js";

export function hasAcces(req, res, next) {}

export async function validatePostExist(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error("El post solicitado no existe");
      error.status = 404;
      throw error;
    }

    req.post = post;

    next();
  } catch (error) {
    console.error("[POST MIDDLEWARE]".error, `Error: ${error.message}`);
    next(error);
  }
}
