const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const MockController = require("./controllers/MockController")
const app = express()

//MongoDB setup
var dbUser = process.env('DB_USER')
var dbPassword = process.env('DB_PASSWORD')
var dbName = process.env('DB_NAME')
mongoose.connect('mongodb+srv://${dbUser}:${dbPassword}@cluster0.ysxlc.mongodb.net/${dbName}?retryWrites=true&w=majority', {useNewUrlParser: true})
    .then(() => console.log("Connected to database!"))
    .catch(err => console.log(err));

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/api/mocks', MockController)
//Start server
app.listen(process.env.PORT, () => console.log("Server started!"))
