const Product = require('../models/Product');

const productController = {
    addProduct: async (req, res) => {
        console.log(req)
        const { title, description, price, stock, size, color } = req.body
        console.log(req.files)
        const archivo = req.files.photo
        var extension = archivo.name.split('.')[1]
        var nombreArchivo = req.body.title + '.' + extension
        const serverURL = `uploads/${nombreArchivo}`

        const photo = `http://localhost:4000/uploads/${nombreArchivo}`

        archivo.mv(serverURL)

        const newProduct = new Product({
            title,
            description, price,
            variants: [{ stock, size, color, photo: photo }],

        })
        await newProduct.save()
            .then(() => res.json({ success: true, message: 'product added successfully' }))
            .catch((error) => res.json({ success: false, error }))
    },
    getProducts: async (req, res) => {
        console.log('hola')
        const product = await Product.find()
        res.json({
            success: true,
            product
        })
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
        const { title, stock, color, size } = req.body
        console.log(req.files)
        const archivo = req.files.photo
        var extension = archivo.name.split('.')[1]
        var nombreArchivo = req.body.title + req.body.color + '.' + extension
        const serverURL = `uploads/${nombreArchivo}`

        const photo = `http://localhost:4000/uploads/${nombreArchivo}`

        archivo.mv(serverURL)

        Product.findOneAndUpdate({ title }, { $push: { variants: { stock, color, size, photo } } })
            .then(() => res.json({ success: true, response: 'The data has been modified successfully' }))
            .catch(error => res.json({ success: false, error }))
    },
    getSelectProductId: async (req, res) => {
        var id = req.params.id
        try {
            const product = await Product.findOne({ _id: id })
            res.json({ success: true, response: { product } })
        }
        catch {
            res.json({ success: false, response: "Error geting product" })
        }
    },
}
module.exports = productController