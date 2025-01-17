require('dotenv').config()
const express = require('express') 
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const mysql = require('mysql2')

const app = express() // app express
const port = process.env.PORT || 3000 // port

// config view engine
configViewEngine(app);

//initiate routes
app.use('/', webRouter)

// test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
})

connection.query(
    'SELECT * FROM Users',
    (err, results, fields) => {
        console.log('results = ',results)
        console.log('fields = ',fields)
    }
)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})