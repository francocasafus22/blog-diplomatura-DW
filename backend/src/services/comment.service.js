import Comment from "../models/Comment.js";

export async function getAllCommentsByPost(postId) {
  try {
    return await Comment.find({ postId })
      .sort({ createdAt: -1 })
      .select("-userId -__v -updatedAt");
  } catch (error) {
    console.error("[GET COMMENTS]".red.bold, `Error: ${error.message}`);
    next(error);
  }
}

export async function createComment({ user, postId, data }) {
  try {
    await Comment.create({
      ...data,
      userId: user._id,
      authorName: user.username,
      authorAvatar: user.image || null,
      postId,
    });
  } catch (error) {
    console.error("[CREATE COMMENT]".red.bold, `Error: ${error.message}`);
    next(error);
  }
}
