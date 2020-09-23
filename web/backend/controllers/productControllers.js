const Product = require('../models/Product');

const productController = {
    addProduct:async (req, res) => {

        const { title, description, price, stock, type } = req.body
        console.log(req.body);
        const archivo = req.files.photo
        const nombreArchivo = req.body.title
        const serverURL = `uploads/${nombreArchivo}`
        const photo = `http://localhost:4000/uploads/${nombreArchivo}`
        archivo.mv(serverURL)
        const newProduct = new Product({
            title,
            description, price,
            stock, type,
            photo: photo
        })
        await newProduct.save()
            .then(() => res.json({ success: true, message: 'product added successfully' }))
            .catch((error) => res.json({ success: false, error }))
    },
    getProducts: (req, res) => {
        Product.find()
            .then(product => res.json({ success: true, product }))
            .catch(error => res.json({ success: false, error }))
    },
    getProductsByType: (req, res) => {
        Product.find({ ...req.params })
            .then(product => res.json({ success: true, product }))
            .catch(error => res.json({ success: false, error }))
    },
    deleteRecipe: (req, res) => {
        Product.findByIdAndDelete({ ...req.params })
            .then(() => res.json({ success: true, message: 'your product has been removed' }))
            .catch(error => res.json({ success: false, error }))
    },
    updateProduct: (req, res) => {
        const { _id } = req.body
        Recipes.findOneAndUpdate({ _id }, { $set: { ...req.body } })
            .then(() => res.json({ success: true, response: 'The data has been modified successfully' }))
            .catch(error => res.json({ success: false, error }))
    },
}
module.exports = productController
