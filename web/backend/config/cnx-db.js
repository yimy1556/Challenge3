const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

    .then(() => console.log("Database connected"))
    .catch(error => console.log(error))