const { default: Charater } = require("../Core/Charater");

class MidCharacter {

    async NewCharater(request) {
        const isCheck = await Charater.findOne({
            where: {
                name: request.name,
            }
        })
        if (isCheck !== null) {
            throw new Error('Charater is exist!')
        }
        const data = await Charater.create(request)
        return data
    }

    async ListCharacter() {
        const response = await Charater.findAll()

        if(response.data)
    }
}

export default new MidCharacter();