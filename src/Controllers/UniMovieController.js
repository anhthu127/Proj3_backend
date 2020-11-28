const { default: MidUniMovie } = require("../Models/Middle/MidUniMovie")


class UniMoviesController {

    saveMovieByCharacterId = (req, res) => {
        const charaterId = req.body.character_id
        const uniMovies = req.body.uniMovies
        const uniName = []
        uniMovies.map((value, i) => {
            uniName.push(value.name)
        })
         return MidUniMovie.saveByCharacterId(charaterId, uniName)
        // return 0
    }
}

export default new UniMoviesController();