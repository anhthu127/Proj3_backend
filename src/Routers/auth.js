import { Router } from 'express';
import AccountController from "../Controllers/AccountController.js"
const router = Router();

router.post('/register', AccountController.registAccount)
router.get('/login', AccountController.loginAccount)

export default router;