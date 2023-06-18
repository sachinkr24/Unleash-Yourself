import express from 'express';
import { signupUser } from '../controller/user-controller.js';
import { loginUser } from '../controller/user-controller.js';
import upload from '../utils/upload.js'
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/file/upload',upload.single('file'),uploadImage);

export default router;