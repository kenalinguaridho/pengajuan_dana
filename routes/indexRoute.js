const
    express = require('express'),
    indexRouter = express.Router(),
    divisionRoute = require('./divisionRoute.js'),
    methodRoute = require('./methodRoute.js'),
    userRoute = require('./userRoute.js'),
    pengajuanDanaRoute = require('./pengajuanDanaRoute.js')

indexRouter.use('/divisions', divisionRoute)
indexRouter.use('/methods', methodRoute)
indexRouter.use('/users', userRoute)
indexRouter.use('/pengajuandana', pengajuanDanaRoute)

module.exports = indexRouter