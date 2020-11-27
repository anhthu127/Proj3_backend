const { Router } = require("express");
const { default: VideoIntroController } = require("../Controllers/VideoIntroController");
const { Response } = require("../libs/handle_response");

const router = Router()

router.get('/all', Response(VideoIntroController.listIntro))
// router.get('/type=?',)

export default router