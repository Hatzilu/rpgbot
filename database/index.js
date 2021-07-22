const mongoose = require('mongoose')
require('dotenv').config();

//connect to db
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to DB!")
})
.catch((err) => {
    console.log("Error while connecting to DB! Error: \n\n"+err)
})