const connection = require('../config/dataBase')
const { getAllUser, getUserById, updateUser, deleteUser } = require('../services/CRUDService')
const User = require("../models/user")

const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home', { listUsers: results })
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    await User.create({
        email: email,
        name: name,
        city: city
    })
    res.redirect('/home')
}

const getCreateUser = (req, res) => {
    return res.render('createUser')
}

const getEditUser = async (req, res) => {
    let id = req.params.id
    //let user = await getUserById(id)
    let user = await User.findById(id).exec()
    return res.render('editUser', { user: user })
}

const postEditUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let id = req.body.id

    //await updateUser(email, name, city, id)
    await User.updateOne({ id: id }, { email: email, name: name, city: city })
    res.redirect('/home')
}

const showDeleteUser = async (req, res) => {
    const id = req.params.id
    //let user = await getUserById(id)
    let user = await User.findById(id)
    res.render('delete', { user: user })
}

const postDeleteUser = async (req, res) => {
    let id = req.body.id
    //await deleteUser(id)
    await User.deleteOne({ id: id })
    // res.send("ok deleted", setTimeout(() => {
    //     res.redirect('/home');
    // }, 3000))
    res.redirect('/home')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUser,
    getEditUser,
    postEditUser,
    showDeleteUser, postDeleteUser
}