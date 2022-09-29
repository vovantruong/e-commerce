const express = require('express')
const router = express.Router()

const { register, login, forgotpassword, changepassword } = require('../controllers/authController');

router.route("/login").post(login)

router.route("/register").post(register)

router.route("/forgotpassword").post(forgotpassword)

router.route("/changepassword:token").put(changepassword)

module.exports = router
