mongoose = require('mongoose');

const directionSchema = new mongoose.Schema({
    alias:{
        type:String,
        trim:true
    },
    direction: {
        type: String,
        required:true,
		trim: true
	},
	altura: {
        type:Number,
        required:true
    },
    postalCode:{
        type:Number,
        required:true
    },
	addressPhone: {
		type: String,
		required: true
    },
    betweenStreets:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        require:true
    }
})

const Direction = mongoose.model('direction', directionSchema);
module.exports = Direction;
