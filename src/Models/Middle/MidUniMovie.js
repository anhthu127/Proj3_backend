import { response } from "express"
import Movies from "../Core/Movies"

const { default: UniMovie } = require("../Core/UniMovie")

class MidUniMovie {

    listById = async (id) => {
        const response = await UniMovie.findAll({
            where: {
                charater_id: id,

            }
        })
    }

    saveByCharacterId = async (charater_id, uniName) => {
        let saved = []
        let idMovie = []
        console.log(uniName.length);
        for (let index = 0; index < uniName.length; index++) {
            console.log(22222222);
            const existMovie = await UniMovie.findOne({
                where: {
                    charater_id: charater_id,
                    name: uniName[index]
                }
            })
            // console.log("response  ", existMovie); 
            // console.log("response  ", existMovie);
            if (existMovie === null) {
                console.log("==================");
                const getIdMovie = await Movies.findAll({
                    attributes: ["id", "name"],
                    where: {
                        name: uniName[index],
                        // character_movie_id: charater_id
                    }
                }).map((value, key) => {
                    idMovie.push(value.id)
                })

                console.log("getMovie   ", idMovie[0])
                if (idMovie === null || idMovie.length === 0) {
                    console.log(111);
                    const dataSave = {
                        charater_id: charater_id,
                        name: uniName[index]

                    }
                    const created = await UniMovie.create(dataSave)
                    if (created && created.uniName) {
                        saved.push({ isSaved: { name: uniName[index] } })
                    }
                    console.log("created1", created);
                } else {
                    console.log(2222);
                    const dataSave = {
                        charater_id: charater_id,
                        name: uniName[index],
                        movie_id: idMovie[0]
                    }
                    const created = await UniMovie.create(dataSave)
                    console.log("created: ", created);
                    // console.log("created: ", created.length);
                    if (created.length != 0) {
                        saved.push({ isSaved: { name: uniName[index] } })
                    }
                }
            } else {
                const value = { isExist: { name: uniName[index] } }
                saved.push(value)
            }
            // while (saved.length > 0) {
            //     saved.pop();
            // }
            // while (idMove.length > 0) {
            //     idMovie.pop();
            // }
            saved.length = 0
            idMovie = 0
        }
        console.log("saved  ", saved);
        return saved;
    }
}

export default new MidUniMovie()