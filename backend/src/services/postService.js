import Post from "../models/Post.js";

export async function findPostsByUser(id) {
  const posts = await Post.find({ "author.userId": id });
  return posts;
}

export async function createPost(postData, user) {
  try {
    await Post.create({
      ...postData,
      author: {
        userId: user._id,
        authorName: user.username,
        authorAvatar: user.image || null,
      },
    });
  } catch (err) {
    console.error("CreatePost error: ", err.message);
    err.status = 500;
    throw err;
  }
}
