const express = require('express')

const userController = require('../Controller/userController')

const router = new express.Router()

// create router object to define path
router.post('/register',userController.register)
router.post('/login',userController.login)


module.exports=router