const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post("/", userController.save);
router.put("/login", userController.login);

module.exports = router;