const Joi = require('@hapi/joi')

const validatorMail={
    validateData: (req, res, next) =>{
        const schema = Joi.object({
            mail: Joi.string().email().required(),  
        })

        const validation = schema.validate(req.body)

        if(validation.error !== undefined){
            return res.json({
                success: false,
                error: "enter a valid email.",
                message: validation.error,
                details: [validation.error]
            })
        }
        next()
    }
}

module.exports = validatorMail