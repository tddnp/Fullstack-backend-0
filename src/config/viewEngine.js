const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join('./src', 'views'))
    //console.log("dirname: ", __dirname)
    app.set('view engine', 'ejs')

    // config static file: image, css, js
    app.use(express.static(path.join('./src', 'public')))
    //console.log("dirname: ", __dirname)
}

module.exports = configViewEngine