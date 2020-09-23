const express = require('express')
const userController = require("../controllers/userControllers")
const productController = require("../controllers/productControllers")
const passport = require("../config/passport")

const router = express.Router()

router.route("/user/register")
    .post(userController.createUser)

router.route("/user/login")
    .get(passport.authenticate('jwt', { session: false }), userController.getUser)
    .post(userController.loginUser)

router.route("/product/getProducts")
    .get(productController.getProducts)

router.route("/product/addProduct")
    .post(productController.addProduct)
    .put(productController.updateProduct)

module.exports = router
