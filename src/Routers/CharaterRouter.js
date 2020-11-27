import Router from 'express'
import CharacterController from '../Controllers/CharacterController'
import { Response } from '../libs/handle_response'
const route = Router();
route.get('/add', Response(CharacterController.NewCharater))
route.get('/list', Response(CharacterController.NewCharater))

export default route;