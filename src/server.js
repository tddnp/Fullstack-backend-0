require('dotenv').config()
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/dataBase')
//const bodyParser = require('body-parser');

const app = express() // app express
const port = process.env.PORT || 3000 // port

// config req.body
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// config view engine
configViewEngine(app);

//initiate routes
app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})