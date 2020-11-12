import { Router } from 'express';
import auth from '../Routers/auth.js'
import location from './locationRouter'
import category from './categoryRouter'
import movies from './MoviesRouter'
import charater from './CharaterRouter'
import uniMovie from './UniMovieRouter'
import test from '../Routers/TestRouter';
let rootRouter = new Router();
rootRouter.use('/', auth)
rootRouter.use('/location', location)
rootRouter.use('/category', category)
rootRouter.use('/movies', movies)
rootRouter.use('/character', charater)
rootRouter.use('/uniMovie', uniMovie)
rootRouter.use('/test', test)
export default rootRouter;

