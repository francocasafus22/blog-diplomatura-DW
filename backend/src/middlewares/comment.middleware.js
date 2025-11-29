import Comment from "../models/Comment.js";

export async function validateCommentExist(req, res, next) {
  try {
    const {commentId} = req.params
    
    if(!commentId){
      const error = new Error("No se proporcionó un ID");
      error.status=400;
      throw error
    }

    const comment = await Comment.findById(commentId)

    if (!comment) {
      const error = new Error("No comment found");
      error.status = 404;
      throw error;
    }

    req.comment = comment;

    next();
  } catch (error) {
    console.error("[COMMENT MIDDLEWARE]".error, `Error: ${error.message}`);
    next(error);
  }
}

