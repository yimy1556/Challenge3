const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const message = "Mail or Password incorrect"

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
                lastName: user.lastName
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
            lastName : userExists.lastName
		})
	},
	getUser: (req, res) => {
		const {firstName,lastName, mail} = req.user
		res.json({firstName,lastName, mail})
    }
}

module.exports = userController
