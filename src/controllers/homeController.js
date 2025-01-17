const connection = require('../config/dataBase')

const getHomePage = (req,res) => {
    //res.render('sample')

    let users = []
    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            users = results
            console.log('results home page: ', users)
            res.send(JSON.stringify(users))
        }
    )
}

module.exports = {
    getHomePage
}