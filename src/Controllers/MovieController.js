const { default: MidMovie } = require("../Models/Middle/MidMovie")


class MovieController {

    newMovies = (req, res) => {
        const request = req.body

        return MidMovie.newMovie(request)

    }
}


export default new MovieController();