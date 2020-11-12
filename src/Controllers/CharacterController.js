import { uploadMedia } from "../libs/file_upload"

const { default: MidCharacter } = require("../Models/Middle/MidCharacter")

class CharaterController {
    NewCharacter = async (req, res) => {
        const fileUploaded = await uploadMedia(req, res)
        let imageUrl = fileUploaded ? (req.protocol + '://' + req.get('host') + '/' + fileUploaded.filename) : '';
        console.log("hihi ", req.body);
        const characterInfo = req.body
        const data = {
            name: characterInfo.name,
            dOb: characterInfo.dOb,
            height: parseInt(characterInfo.height),
            gender: parseInt(characterInfo.gender),
            born_in: characterInfo.bornIn,
            description: characterInfo.description,
            image: imageUrl,
            uniMovies: characterInfo.uniMovies,

        } 
         return MidCharacter.NewCharater(data)
    }

    listChacrater = (req, res) => {
        return MidCharacter.ListCharacter()
    }

    editCharacter = (req, res) => {
        const id =  req.param 

        return MidCharacter.EditCharacter()
    }
}

export default new CharaterController()