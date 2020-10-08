const express = require('express')
require('dotenv').config()
require('./config/cnx-db')
const cors = require('cors')
const router = require('./routes/router')
const fileUpload = require('express-fileupload')
const app = express()
const mercadopago = require('mercadopago');
const path = require('path')

app.use('/uploads', express.static(`${__dirname}/uploads`))

// Agrega credenciales
mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN'
});

app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.use('/api', router)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log("Server listening on port " + port))

