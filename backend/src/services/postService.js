import Post from "../models/Post.js";

export async function getAll() {
  const posts = await Post.find();
  return posts;
}
