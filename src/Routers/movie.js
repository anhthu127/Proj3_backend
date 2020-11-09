import { Router } from 'express';
const { default: MovieController } = require("../Controllers/MovieController")
import Response from '../libs/handle_response'
const route = Router()

route.get('/add', Response(MovieController.newMovies()))
