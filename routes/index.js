const express = require("express");
const Controller = require("../Controllers");
const { authentication, authorization } = require('../middlewares/index')
const router = express.Router();

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.use(authentication)
router.patch('/users/:id', Controller.updateStatus)

module.exports = router;