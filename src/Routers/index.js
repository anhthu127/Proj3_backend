import { Router } from 'express';
import auth from '../Routers/auth.js'

let rootRouter = new Router();

rootRouter.use('/', auth)


export default rootRouter;

