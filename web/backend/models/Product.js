mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    variety: {
        type: Array,

    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('product', productSchema);
module.exports = Product;
