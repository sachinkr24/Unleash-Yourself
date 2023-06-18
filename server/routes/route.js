import express from 'express';



import { createPost,   getPost, getAllPosts, updatePost, deletePost } from '../controller/post-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/signup',singupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);


router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.put('/update/:id', authenticateToken, updatePost ); //updatePost imported
router.delete('/delete/:id', authenticateToken, deletePost );



export default router;