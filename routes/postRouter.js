import express from 'express'
import {getPosts ,createPost,getSinglePosts,deletePost,updatePost} from '../controllers/postController.js'
const router = express.Router()

router.route('/').get(getPosts).post(createPost)
router.route('/:id').get(getSinglePosts).delete(deletePost).patch(updatePost)


export default router