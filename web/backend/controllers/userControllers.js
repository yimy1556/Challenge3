const User = require("../models/User")
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
		console.log(newUser)
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
			rating: userExists.rating,
			rol: userExists.rol
		})
	},
	getUser: (req, res) => {
		const { firstName, lastName, mail, rol } = req.user
		res.json({ firstName, lastName, mail, rol })
	},

	getNewPass: async (req, res) => {
		mailSent = req.body.mail
		console.log(mailSent)

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
				html: `<h4>Hello ${user.firstName},</h4>
						   <h3>Your new password is: <span style="color: #0D195A; font-size:20px;">${newPass}</span></h3>
       					Thanks. <hr/>
       					<h2>Team Pyral</h2>`
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
		// Está harcodeada la id por ahora, después se cambia
		const productRating = await User.findOneAndUpdate({_id: '5f722c325662db1db4e938b6'},{$push:{rating:{productId: productId, ratingNumber: rating}}})
		res.json({ success: true, rating, productId })
		console.log(rating);
		console.log(productRating);
	},

	createSuscription: async (req, res) => {
		
		const { mail } = req.body
		const mailExists = await Newsletter.findOne({mail})
		console.log({mail})
		if(mailExists){
			res.json({
				success:false, message:'The email is registered'
			})
		} else{
			const newNewsletter = new Newsletter({
				mail:mail
			})
			newNewsletter.save()
			res.json({
				success:true, mail: newNewsletter.mail
			})
		}
	}
}

module.exports = userController
