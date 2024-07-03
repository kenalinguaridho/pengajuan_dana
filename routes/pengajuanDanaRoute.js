const
    PengajuanDanaController = require('../controllers/pengajuanDanaController.js'),
    express = require('express'),
    pengajuanDanaRoute = express.Router()

pengajuanDanaRoute.get('/', PengajuanDanaController.getPengajuanDanaPage)
pengajuanDanaRoute.get('/add', PengajuanDanaController.addPengajuanDanaForm)
pengajuanDanaRoute.post('/', PengajuanDanaController.addPengajuanDana)
pengajuanDanaRoute.get('/delete/:id', PengajuanDanaController.deletePengajuanDana)
pengajuanDanaRoute.get('/edit/:id', PengajuanDanaController.editPengajuanDanaform)
pengajuanDanaRoute.post('/update/', PengajuanDanaController.updatePengajuanDana)

module.exports = pengajuanDanaRoute