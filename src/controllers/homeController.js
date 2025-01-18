const connection = require('../config/dataBase')
const { getAllUser, getUserById, updateUser } = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    let results = await getAllUser()
    return res.render('home', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    // connection.query(
    //     `INSERT INTO 
    //         Users(email, name, city) 
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     (err, results, fields) => {
    //         res.send('create user successfully')
    //         console.log("results: ", results)
    //     }
    // )

    let [results, fields] = await connection.query(
        `INSERT INTO 
            Users(email, name, city)
        VALUES (?,?,?)`,
        [email, name, city]
    )
    console.log('results = ', results)
    res.send('create user successfully')
}

const getCreateUser = (req, res) => {
    return res.render('createUser')
}

const getEditUser = async (req, res) => {
    let id = req.params.id
    let user = await getUserById(id)
    return res.render('editUser', { user: user })
}

const postEditUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let id = req.body.id
    console.log('id: ', id)
    await updateUser(email, name, city, id)
    res.send('update successfully')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUser,
    getEditUser,
    postEditUser
}