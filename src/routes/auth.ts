import { Router } from 'express';
const router = Router();

import { signup, signin, profile } from '../controllers/auth'
// import { TokenValidation } from '../libs/verifyToken'

router.post('/register', signup);
router.post('/login', signin);
router.get('/profile', profile)

export default router;
