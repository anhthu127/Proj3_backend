const { default: MidIntroVideo } = require("../Models/Middle/MidIntroVideo")

 class VideoIntroController {
      listIntro = (req, res) =>{

        return MidIntroVideo.listIntro;
    }
}

export default new  VideoIntroController();