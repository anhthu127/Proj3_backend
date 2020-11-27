import Movies from "../Core/Movies.js"
class MidMovies {
    async getList() {
        const list = await Movies.findAll()
        return list
    }
    async getByCategory() {
        const MoviesFiltered = await Movies.findAll({
            order: [
                ['id',],
                ['category'],
            ],
        })
    }


    async addMovie(request) {
        const isCheck = await Movies.findOne({
            where: {
                name: request.name,
                link: request.link,
                author: request.author
            }
        })
        if (isCheck != null) {
            throw new Error("Movie is exist!")
        }
        const response = await Movies.create(request)
        return response
    }

}

export default new MidMovies()
