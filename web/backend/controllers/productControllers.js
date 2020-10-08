const Product = require('../models/Product');

const productController = {
    addProduct: async (req, res) => {
        const { title, description, price, stock, size, color } = req.body
        const archivo = req.files.photo
        var extension = archivo.name.split('.')[1]
        var nombreArchivo = req.body.title + req.body.color + '.' + extension
        var photoTrimed = nombreArchivo.replace(/ /g,'')

        const serverURL = `uploads/${photoTrimed}`
        const photo = `http://localhost:4000/uploads/${photoTrimed}`
        
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
    deleteProduct: (req, res) => {
        Product.findOneAndDelete({ ...req.body })
            .then(() => res.json({ success: true, message: 'your product has been removed' }))
            .catch(error => res.json({ success: false, error }))
    },
    modifyProduct: (req, res) => {
        const { _id, title, description, price } = req.body
        Product.findByIdAndUpdate(_id, { title, description, price }, { new: true })
            .then(product => {
                res.json({ success: true, product })
            })
            .catch(error => {
                res.json({ success: false, error })
            })
    },
    updateProduct: (req, res) => {
        const { title, stock, color, size } = req.body
        const archivo = req.files.photo
        var extension = archivo.name.split('.')[1]
        var nombreArchivo = req.body.title + req.body.color + '.' + extension
        var photoTrimed = nombreArchivo.replace(/ /g,'')
        const serverURL = `uploads/${photoTrimed}`
        
        const photo = `http://localhost:4000/uploads/${photoTrimed}`

        archivo.mv(serverURL)

        Product.findOneAndUpdate({ title }, { $push: { variants: { stock, color, size, photo } } })
            .then(() => res.json({ success: true, response: 'The data has been modified successfully' }))
            .catch(error => res.json({ success: false, error }))
    },
    updateListProduct: (req, res) => {
        const listProduct = req.body.listProduct
        listProduct.map(async (product) => {
            const pro = await Product.findOne({_id:product._id})
            const variant = pro.variants.filter(vari => (vari.color === product.color && vari.size === product.size))
            var poc = pro.variants.indexOf(variant[0])
            pro.variants[poc].stock = Number(pro.variants[poc].stock) - product.cant
            await Product.update({_id:pro._id}, pro)
        })
    },
    //Select product by "id"
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

    //Hit counter for a single product.
    upViews: async (req, res) => {
        var id = req.params.id
        try {
            const product = await Product.findOne({ _id: id })
            var views = product.views += 1
            await Product.updateOne({ _id: id }, { views })
            res.json({
                success: true,
                response: "viewed"
            })
        } catch (error) {
            res.json({
                success: false,
                response: error
            })
        }
    },
    ratingProduct: async (req, res) => {
        const { productId, stars } = req.body
        const aProduct = await Product.findOne({ _id: productId })
        var newreviews = aProduct.reviews += 1
        var newstars = aProduct.stars + stars
        const productRat = await Product.findOneAndUpdate({ _id: productId }, { stars: newstars, reviews: newreviews })
        // Está harcodeada la id por ahora, después se cambia
        // const productR = await Product.findOneAndUpdate({ _id: productId },  })
        res.json({
            success: true,
            rating: {
                productId: productId,
                stars: newstars,
                reviews: newreviews
            }

        })
    },


}
module.exports = productController
