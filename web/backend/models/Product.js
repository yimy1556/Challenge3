mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    photo: {
        type: String,

    },
    description: {
        type: String,
        required: true
    },
    variants: {
        type: Array,

    },
    price: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    stars: {
        type: Number,
        default: 0
    },
    reviews: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('product', productSchema);
module.exports = Product;
