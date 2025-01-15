const express = require('express') 
const path = require('path')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 3000 // port

// config template engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

//initiate routes
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/home', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})