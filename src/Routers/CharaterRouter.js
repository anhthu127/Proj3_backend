import Router from 'express'
import CharacterController from '../Controllers/CharacterController'
import { Response } from '../libs/handle_response'
const route = Router(); 
route.post('/add', Response(CharacterController.NewCharacter))
route.get('/list', Response(CharacterController.listChacrater))
route.get('/edit/', Response(CharacterController.editCharacter))
 
export default route;