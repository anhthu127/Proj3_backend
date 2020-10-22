import Movies from "../Models/Core/Movies";
import MidMovies from "../Models/Middle/MidMovies";

const { default: MidIntroVideo } = require("../Models/Middle/MidIntroVideo")

class MoviesController {
    ListMovies = (req, res) => {
        return MidMovies.getList();
    }

    NewMovie = (req, res) => {
        const data = req.body
       
        return MidMovies.addMovie(data)
    }
}


export default new MoviesController();