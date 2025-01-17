const express = require('express')
const router = express.Router()
const { getHomePage, postCreateUser, getCreateUser } = require('../controllers/homeController')

router.get('/home', getHomePage)
router.post('/create-user', postCreateUser)
router.get('/create-user', getCreateUser)

module.exports = router