const { default: Charater } = require("../Core/Charater");
const MidUniMovie = require("./MidUniMovie")
class MidCharacter {

    NewCharater = async (data) => {
        console.log(data);
        const isCheck = await Charater.findOne({
            where: {
                name: data.name,
                dOb: data.dOb,
                height: data.height,
                gender: data.gender,
                born_in: data.born_in,
            }
        })
        console.log("isCkeck    ", isCheck);
        if (isCheck !== null) {
            throw new Error('Charater is exist!')
        }
        await Charater.create(data)
        const created = await Charater.findOne({
            where: {
                name: data.name,
                dOb: data.dOb,
                height: data.height,
                gender: data.gender,
                born_in: data.born_in,
            }
        })
        return created
    }


    async ListCharacter() {
        const response = await Charater.findAll()

        return response

    }

    async EditCharater(data) {
        const response = await Charater.update(data)

        return response
    }

}

export default new MidCharacter();