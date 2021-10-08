const express = require('express');
const channelController = require('../controllers/channel.controller');

const router = express.Router();

router.post("/", channelController.create);
router.get("/users/:user_id", channelController.channels);
router.delete("/:id", channelController.destroy);

module.exports = router;