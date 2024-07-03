const
    MethodController = require('../controllers/methodController.js'),
    express = require('express'),
    methodRoute = express.Router()

methodRoute.get('/', MethodController.getMethodPage)

module.exports = methodRoute