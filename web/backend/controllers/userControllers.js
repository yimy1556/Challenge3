const User = require("../models/User")
const Product = require("../models/Product")
const newsletter = require('../models/Newsletter')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const message = "Mail or Password incorrect"
const nodeMailer = require('nodemailer')
const Newsletter = require("../models/Newsletter")




var transport = nodeMailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	auth: {
		pass: "Pyral2020",
		user: "your.pyral@gmail.com"
	},
	tls: { rejectUnauthorized: false }
})

const userController = {
	createUser: async (req, res) => {
		const { pass } = req.body
		const newUser = new User({ ...req.body })
		newUser.pass = bcrypt.hashSync(pass.trim(), 10)
		newUser.save()
			.then(user => {
				const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {})
				if (!token)
					return res.json({
						success: false,
						error: "Error al crear el usuario",
					})
				res.json({
					success: true,
					token,
					firstName: user.firstName,
					mail: user.mail,
					lastName: user.lastName,
					Contact: user.contact,
					rating: user.rating,
					rol: user.rol
				})
			})
			.catch(err => res.json({ success: "false", error: err }))
	},
	loginUser: async (req, res) => {
		const { mail, pass } = req.body

		const userExists = await User.findOne({ mail })
		if (!userExists) return res.json({ success: false, error: message })
		const passwordMatches = bcrypt.compareSync(pass, userExists.pass)

		if (!passwordMatches) return res.json({ success: false, error: message })
		const token = jwt.sign({ ...userExists }, process.env.SECRET_KEY, {})
		if (!token) return res.json({ success: false, error })

		res.json({
			success: true,
			token,
			firstName: userExists.firstName,
			mail: userExists.mail,
			lastName: userExists.lastName,
			contact: userExists.contact,
			rating: userExists.rating,
			rol: userExists.rol
		})
	},
	getUser: (req, res) => {
		const { firstName, lastName, mail, contact, rol, rating, token } = req.user
		console.log('este es el console log')
		res.json({ firstName, lastName, mail, contact, rol, rating, token })
		console.log(token)
	},

	//A new random password is generated and sent. (forgot password)
	getNewPass: async (req, res) => {
		mailSent = req.body.mail

		try {
			await User.findOne({ mail: mailSent })

			var length = 8
			var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
			var newPass = ""
			for (var i = 0, n = charset.length; i < length; ++i) {
				newPass += charset.charAt(Math.floor(Math.random() * n));
			}
			const passwordHashed = bcrypt.hashSync(newPass, 10)
			const user = await User.findOneAndUpdate({ mail: mailSent }, { pass: passwordHashed })

			var mailOptions = {
				from: "Pyral <your.pyral@gmail.com>",
				sender: "Pyral <your.pyral@gmail.com>",
				to: `${user.mail}`,
				subject: "New Password",
				html: `<!DOCTYPE html>
			<html lang="en">
			<head>
			  <meta charset="UTF-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
			  <title>Document</title>
			</head>
			<body style="margin: 0px; padding: 0px; font-family: 'Roboto'; background-color: whitesmoke;">
			  <div style="padding: 2%;">
				<h3 style="color: rgb(2, 2, 2);">Hello ${user.firstName},</h3>
				<p style="color:  rgb(2, 2, 2);">Your new password is: <span style="color: #0D195A; font-size:20px;">${newPass}</span></p>
				<p style="color:  rgb(2, 2, 2);">Thanks.</p>  <hr/>
			  </div>
			  <div style="text-align: center;">
				<h2 style="color: rgb(2, 2, 2);">Team Pyral</h2>
			  </div>  
			</body>
			</html>`
			}
			transport.sendMail(mailOptions, (error, info) => {
				res.send("send email")
			})

		} catch (error) {
			res.json({
				success: false,
				response: "Error getting account"
			})
		}
	},

	postRating: async (req, res) => {
		const { rating, productId } = req.body
		const { _id } = req.user
		// Está harcodeada la id por ahora, después se cambia
		const productRating = await User.findOneAndUpdate({ _id }, { $push: { rating: { productId: productId, ratingNumber: rating } } })
		// const productR = await Product.findOneAndUpdate({ _id: productId }, { $inc: { stars: +rating, reviews: +1 } })
	},

	postContact: async (req, res) => {
		const { country, city, address, postalCode, phoneNumber } = req.body
		const { _id } = req.user
		const contact = await User.findOneAndUpdate({ _id }, { contact: { country: country, city: city, address: address, postalCode: postalCode, phoneNumber: phoneNumber } })
		res.json({ success: true, contact: [{ country: country, city: city, address: address, postalCode: postalCode, phoneNumber: phoneNumber }] })
		console.log(newDirection);
	},

	// getContact: (req, res) => {
	// 	const { contact } = req.user
	// 	console.log(contact);
	// 	res.json({ success: true, contact })
	// },
	//Subscription mail is recorded and notified by mail.
	createSuscription: async (req, res) => {

		const { mail } = req.body
		const mailExists = await Newsletter.findOne({ mail })
		if (mailExists) {
			res.json({ success: false, info: 'The email is registered' })
		} else {
			const newNewsletter = new Newsletter({
				mail
			})
			newNewsletter.save()
			res.json({
				success: true, mail: newNewsletter.mail, info: 'You will receive our promotions very soon!'
			})
			var mailOptions = {
				from: "Pyral <your.pyral@gmail.com>",
				sender: "Pyral <your.pyral@gmail.com>",
				to: `${mail}`,
				subject: "Pyral Newsletter",
				html:
					`<!DOCTYPE html>
			<html lang="en">
			<head>
			  <meta charset="UTF-8">
			  <meta name="viewport" content="width=device-width, initial-scale=1.0">
			  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
			  <title>Document</title>
			</head>
			<body style="margin: 0px; padding: 0px; font-family: 'Roboto';">
			  <div style="text-align: center; margin: 0px;">
				<h1 style="background-color: whitesmoke; color: rgb(2, 2, 2); margin: 0px; padding: 15px;">Welcome to Pyral</h1>
			  </div>
			  <div style="text-align: center; background-image: url('https://images.pexels.com/photos/2951457/pexels-photo-2951457.jpeg?cs=srgb&dl=pexels-eben-odonkor-2951457.jpg&fm=jpg');
			   height: 81.5vh; background-position: center; background-repeat: no-repeat; background-size:100%; margin: 0px;">
			  <button style="margin-top: 45vh; background-color: black; color: whitesmoke; padding: 10px; font-size: 30px; border-color: black;">
			  <a href="http://localhost:3000/shop" style="text-decoration: none; color: whitesmoke;">Go Shop!</a>
			  </button>
			  <p style="color: whitesmoke; font-size:12px; font-size:25px; margin: 0px; padding: 10px; font-weight: bold;">Thank you for subscribing, <br>
				we will notify you when a discount or promotion is available! 
			  </p>
			  </div>
			  <div style="text-align: center; background-color: rgb(2, 2, 2); padding: 5px; height: 5vh;">
				<span style="color: rgb(255, 255, 255); font-size: small;">Want to change how you receive these emails?</span>
				<a style="color: rgb(240, 231, 231); font-size:small; text-decoration: none;" href="http://localhost:3000/lowNewsletter"> -  unsubscribe from this list.</a>
			  </div>
			  <div style="background-color: black; text-align: center; height: 5vh;">
				<h3 style="color: whitesmoke;margin: 0px; font-size: 20px; padding: 10px;">Team Pyral</h3>
			  </div>
			</body>
			</html>
		  `
			}
			transport.sendMail(mailOptions, (error, info) => {
				res.send("send email")
			})
		}
	},


	//List of subscribers to the newsletter
	listSubsNewsletter: async (req, res) => {
		const list = await Newsletter.find()
			.then(list => {
				res.json({ success: true, list })
			})
			.catch(error => {
				res.json({ success: false, error })
			})
	},

	//Password change from user profile. 
	changePass: async (req, res) => {

		mailUser = req.body.mail
		passwordUser = req.body.password

		const passHash = bcrypt.hashSync(passwordUser, 10)
		try {
			const user = await User.findOneAndUpdate({ mail: mailUser }, { pass: passHash })
			res.json({
				success: true,
				response: "your password has been changed successfully."
			})
		}
		catch {
			res.json({
				success: false,
				response: "error in change password"
			})
		}
	},

	lowNewsletter: async (req, res) => {
		mailUser = req.body.mail

		try {
			await Newsletter.findOneAndDelete({ mail: mailUser })
			res.json({
				success: true,
				response: " delete newsletter DB"
			})
		}
		catch {
			res.json({
				success: false,
				response: "error in low newsletter"
			})
		}
	}

}

module.exports = userController
