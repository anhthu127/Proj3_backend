import TestController from "../Controllers/TestController";

const { Router } = require("express");
 const { Response } = require("../libs/handle_response");
const router = Router() 

router.post('/post', Response(TestController.saveFile))
 
export default router;