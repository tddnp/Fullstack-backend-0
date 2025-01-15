require('dotenv').config()
const express = require('express') 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const app = express() // app express
const port = process.env.PORT || 3000 // port

// config view engine
configViewEngine(app);

//initiate routes
app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})