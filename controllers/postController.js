import Post from "../models/Post.js";

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    
      res.status(201).json(posts);
   
  } catch (error) {
    next(error);
  }
};

const getSinglePosts = async (req, res, next) => {
  try {
    const {id:_id}=req.params
    const post = await Post.findById(_id);
    
      res.status(201).json(post);
   
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
const deletePost = async (req, res, next) => {
  try {
    const {id:_id}=req.params
    const post = await Post.findByIdAndDelete(_id)
  } catch (error) {
    next(error);
  }
};


const updatePost = async (req, res, next) => {
  try {
    const {id:_id}=req.params
    const post = await Post.findByIdAndUpdate(_id,req.body,{new:true})
    res.status(201).json(post)
  } catch (error) {
    next(error);
  }
};
export { getPosts, createPost ,getSinglePosts,deletePost,updatePost};
