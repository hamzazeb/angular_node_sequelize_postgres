const express = require('express');
const videoController = require('../controllers/video.controller');

const router = express.Router();

router.post("/", videoController.video);
router.get("/channels/:channel_id", videoController.view); // get videos of specific channel
router.delete("/:id", videoController.destroy);

module.exports = router;