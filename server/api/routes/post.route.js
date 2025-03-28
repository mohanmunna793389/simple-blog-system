import {Router} from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createPost, deletePost, getPosts, updatepost } from '../controllers/post.controller.js';


const router = Router();
router.post('/create',verifyToken, createPost);
router.get('/getposts',verifyToken, getPosts);
router.delete('/deletepost/:postId/:userId', verifyToken, deletePost);
router.put('/updatepost/:postId/:userId', verifyToken, updatepost);

export default router;