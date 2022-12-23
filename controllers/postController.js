import Post from "../models/Post.js";

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    
      res.status(201).json(posts);
   
  } catch (error) {
    next(error);
  }
};
const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body)
    res.status(201).json(post)
  } catch (error) {
    next(error);
  }
};

export { getPosts, createPost };
