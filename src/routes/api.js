const express = require('express')
const routerAPI = express.Router()
const {
    getAllUserApi,
    postCreateUserApi,
    putUpdateUserApi,
    deleteUserApi
} = require("../controllers/apiController")

routerAPI.get('/', (req, res) => {
    res.send("Hello world from API")
})

routerAPI.get('/users', getAllUserApi)
routerAPI.post('/users', postCreateUserApi)
routerAPI.put('/users', putUpdateUserApi)
routerAPI.delete('/users', deleteUserApi)

module.exports = routerAPI