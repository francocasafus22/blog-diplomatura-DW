import Post from "../models/Post.js";

export async function findPostsByUser(id) {
  const posts = await Post.find({ "author.userId": id });
  return posts;
}
