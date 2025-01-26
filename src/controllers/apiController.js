const User = require("../models/user")

const getAllUserApi = async (req, res) => {
    let result = await User.find({})
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const postCreateUserApi = async (req, res) => {
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let result = await User.create({ email: email, name: name, city: city })
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const putUpdateUserApi = async (req, res) => {
    let id = req.body.id
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city

    let result = await User.updateOne({ id: id }, { email: email, name: name, city: city })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

const deleteUserApi = async (req, res) => {
    let id = req.body.id
    let result = await User.deleteOne({ id: id })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    getAllUserApi,
    postCreateUserApi,
    putUpdateUserApi,
    deleteUserApi
}