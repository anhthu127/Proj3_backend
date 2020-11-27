import { Router } from 'express';
import AccountController from "../Controllers/AccountController.js"
import { Response } from '../libs/handle_response.js';
const router = Router();

router.post('/register', Response(AccountController.registAccount))
router.post('/login', Response(AccountController.loginAccount))

export default router;
