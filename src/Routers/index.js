import { Router } from 'express';
import auth from '../Routers/auth.js'
import location from './locationRouter'
import category from './categoryRouter'
import movies from './MoviesRouter'
import charater from './CharaterRouter'
let rootRouter = new Router();
rootRouter.use('/', auth)
rootRouter.use('/location', location)
rootRouter.use('/category', category)
rootRouter.use('/movies', movies)
rootRouter.use('/character', charater)
export default rootRouter;

