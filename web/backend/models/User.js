mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
    },
    rol:{
        type:String,
        default:'client'
    },
	mail: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	pass: {
		type: String,
		required: true
	},
	direction: {
		type: Array,
		default: []
	}
})

const User = mongoose.model('user', userSchema);
userSchema.plugin(uniqueValidator, { message: 'email esta en uso' });
module.exports = User;
