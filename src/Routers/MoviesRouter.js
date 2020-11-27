
const { Router } = require("express");
const { default: MoviesController } = require("../Controllers/MoviesController");
const { Response } = require("../libs/handle_response");
const router = Router() 

router.get('/list', Response(MoviesController.ListMovies))
router.post('/add', Response(MoviesController.NewMovie))

export default router;