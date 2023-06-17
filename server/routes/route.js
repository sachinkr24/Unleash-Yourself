import express from 'express';
import { signupUser } from '../controller/user-controller.js';
import { loginUser } from '../controller/user-controller.js';
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);


export default router;