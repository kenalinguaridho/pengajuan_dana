const
    DivisionController = require('../controllers/divisionController.js'),
    express = require('express'),
    divisionRoute = express.Router()

divisionRoute.get('/', DivisionController.getDivisionPage)

module.exports = divisionRoute