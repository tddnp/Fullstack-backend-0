const express = require('express')
const router = express.Router()
const { getHomePage, postCreateUser, getCreateUser, getEditUser, postEditUser } = require('../controllers/homeController')

router.get('/home', getHomePage)
router.post('/create-user', postCreateUser)
router.get('/create-user', getCreateUser)

//edit user
router.get('/edit-user/:id', getEditUser)
router.post('/edit-user/', postEditUser)

module.exports = router