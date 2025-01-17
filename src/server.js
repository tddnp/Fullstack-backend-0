require('dotenv').config()
const express = require('express') 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/dataBase')

const app = express() // app express
const port = process.env.PORT || 3000 // port

// config view engine
configViewEngine(app);

//initiate routes
app.use('/', webRouter)

connection.query(
    'SELECT * FROM Users',
    (err, results, fields) => {
        console.log('results = ',results)
        //console.log('fields = ',fields)
    }
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})