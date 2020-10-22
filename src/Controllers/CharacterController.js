const { default: MidCharacter } = require("../Models/Middle/MidCharacter")

class CharaterController {
    NewCharater = (req, res) => {
        const data = req.body
        return MidCharacter.NewCharater(data)
    }

    listCharater = (req, res) => {
        
        // return MidCharacter.
    }
}

export default new CharaterController()