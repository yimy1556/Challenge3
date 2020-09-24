const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const message = "Mail or Password incorrect"
const nodeMailer = require('nodemailer')


var transport = nodeMailer.createTransport({
    port:465, 
    host:"smtp.gmail.com",
    auth: {
        pass: "Carla2020",
        user: "carlabrunni79@gmail.com"
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
			rol: userExists.rol
		})
	},
	getUser: (req, res) => {
		console.log('este es el forcedLogin')
		const { firstName, lastName, mail, rol } = req.user
		res.json({ firstName, lastName, mail, rol })
	},

	getNewPass: async (req, res) =>{
		mailSent = req.body.mail
		console.log(mailSent)

        try{
			await User.findOne({mail:mailSent})
			
            var length = 8
            var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            var newPass = ""
            for (var i = 0, n = charset.length; i < length; ++i) {
                newPass += charset.charAt(Math.floor(Math.random() * n));
            }
            const passwordHashed = bcrypt.hashSync(newPass, 10)
           
				const user = await User.findOneAndUpdate({mail: mailSent}, {password: passwordHashed})
				console.log
				
                var mailOptions = {
                    from: "Pyral <notresponse@notreply.com>",
                    sender: "Pyral <notresponse@notreply.com>",
                    to: `${user.mail}`,
                    subject: "New Password",
                    html:  `<div>
                    <h1>This is your new password:${newPass}, continue using Pyral :)</h1>
                    <h2>Please sign up again<h2>        
                    </>`,
                }
                transport.sendMail(mailOptions, (error, info) => {
                  
                    res.send("send email")
                })

        }catch(error){
            res.json({
                success:false,
                response: "Error getting account"
            })
        }
    }

}

module.exports = userController
