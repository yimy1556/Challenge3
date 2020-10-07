mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema({
    mail:{
        type: String,
        required: true
    },

    subscription:{
        type: Boolean,
        default: true

    }
})

const Newsletter = mongoose.model('newsletter', newsletterSchema)

module.exports = Newsletter