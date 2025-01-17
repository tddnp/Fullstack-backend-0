const connection = require('../config/dataBase')

const getHomePage = (req, res) => {
    return res.render('home')
}

const postCreateUser = (req, res) => {
    console.log(req.body)
}

module.exports = {
    getHomePage,
    postCreateUser
}