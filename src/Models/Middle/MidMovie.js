import Movie from "../Core/Movie";


class MidMovie {

    async newMovie(request) {
        // let formData = {
        //     name: request.name,
        //     description: '',
        //     author: '',
        //     link: '',
        //     image: '',
        //     category: '',

        // }
        const res = await Movie.create(request)
        return res

    }
}

export default new MidMovie();