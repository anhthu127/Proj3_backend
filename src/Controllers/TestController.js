import { uploadMedia } from "../libs/file_upload"

const { default: MidTest } = require("../Models/Middle/MidTest")

class TestController {

    saveFile = async (req, res) => {
        await console.log("hihi:  ", req.body);

        const fileUploaded = await uploadMedia(req, res)
        let avatar = fileUploaded ? req.protocol + '://' + req.get('host') + '/' + fileUploaded.name : '';
        console.log("req:  ", fileUploaded);
       await console.log("req.doby:  ", req.body);
        console.log("req.doby:  ", req.body.name);
        console.log("req.doby:  ", req.body.ava);
        const infor= {
            name:req.body.name,
            
        }
        const profile = ''
        return MidTest.uploadFile(profile, avatar)
        
    }
}

export default new TestController()