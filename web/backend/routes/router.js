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

router.route("/product/deleteProduct")
    .put(productController.deleteProduct)

router.route("/product/modifyProduct")
    .put(productController.modifyProduct)

//Search product of "id"    
router.route('/selectProduct/:id')
    .get(productController.getSelectProductId)

//Forgot Pass, sending email with new password.
router.route('/sendMail')
    .put(userController.getNewPass)

//subscription newsletter
router.route('/newsletter')
    .post(userController.createSuscription)
    .get(userController.listSubsNewsletter)

//Change password from user profile.
router.route('/changePassword')
    .put(userController.changePass)

    //view counter per product.
    router.route('/viewsProduct/:id')
.get(productController.upViews)

module.exports = router
