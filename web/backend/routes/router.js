const express = require('express')
const userController = require("../controllers/userControllers")
const productController = require("../controllers/productControllers")
const passport = require("../config/passport")
const validatorMail = require('../config/validator')

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

router.route('/user/rating')
    .post(passport.authenticate('jwt', { session: false }), userController.postRating)
/// ruta de terminar comprar
router.route('/finishBuying')
    .put(productController.updateListProduct)

//subscription newsletter
router.route('/newsletter')
    .post(validatorMail.validateData, userController.createSuscription)
    .get(userController.listSubsNewsletter)
    .put(userController.lowNewsletter)

//Change password from user profile.
router.route('/changePassword')
    .put(userController.changePass)

//view counter per product.
router.route('/viewsProduct/:id')
    .get(productController.upViews)

    router.route('/product/ratingProduct')
    .post(productController.ratingProduct)
// Post direction
router.route('/user/direction')
    // .get(passport.authenticate('jwt', { session: false }),userController.getContact)
    .post(passport.authenticate('jwt', { session: false }), userController.postContact)

module.exports = router
