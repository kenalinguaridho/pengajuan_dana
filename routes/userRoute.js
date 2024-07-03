const
    UserController = require('../controllers/userController.js'),
    express = require('express'),
    userRoute = express.Router()

userRoute.get('/', UserController.getUserPage)

module.exports = userRoute