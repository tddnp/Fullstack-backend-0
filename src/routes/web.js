const express = require('express')
const router = express.Router()
const { getHomePage, postCreateUser, getCreateUser, getEditUser, postEditUser, showDeleteUser, postDeleteUser } = require('../controllers/homeController')

// home page
router.get('/home', getHomePage)

// get list users
router.get('/create-user', getCreateUser)
// create user
router.post('/create-user', postCreateUser)

//edit user
router.get('/edit-user/:id', getEditUser)
router.post('/edit-user/', postEditUser)

//delete user
router.post('/delete-user/:id', showDeleteUser)
router.post('/delete-user', postDeleteUser)

module.exports = router