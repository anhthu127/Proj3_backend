import { Router } from 'express';
import auth from '../Routers/auth.js'
import movie from '../Routers/movie'
let rootRouter = new Router();

rootRouter.use('/', auth)
rootRouter.use('/movie', movie)

export default rootRouter;

