const express = require('express')
const userController = require("../controllers/userControllers")
const passport = require("../config/passport")

const router = express.Router()

router.route("/user/register")
    .post(userController.createUser)

router.route("/user/login")
    .get(passport.authenticate('jwt', { session: false }), userController.getUser)
    .post(userController.loginUser)

module.exports = router