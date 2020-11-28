import UniMovieController from "../Controllers/UniMovieController";

const { Router } = require("express");
const { Response } = require("../libs/handle_response");
const route = Router();
// route.get('/list', Response(UniMovieController.findByCharaterId))
route.post('/saveByCharacterId', Response(UniMovieController.saveMovieByCharacterId))
// route.post('/saveByCharacterId', Response(UniMovieController.saveMovieByCharacterId))

export default route;
