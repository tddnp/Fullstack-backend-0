const express = require('express') 
const path = require('path')

const app = express() // app express
const port = 3000 // port

// config template engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

//initiate route
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/home', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})