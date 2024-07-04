const { PengajuanDana, User, Method, Division } = require("../models")

class PengajuanDanaController {
    static getPengajuanDanaPage = async (_, res) => {
        try {
            const pengajuanDanas = await PengajuanDana.findAll({
                attributes: ['id', 'amount'],
                include: [{
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                    include: {
                        model: Division,
                        as: 'division',
                        attributes: ['divisionName']
                    }
                }, {
                    model: Method,
                    as: 'method',
                    attributes: ['methodName']
                }]
            })
            console.log(pengajuanDanas);
            res.render('pengajuanDana', { pengajuanDanas: pengajuanDanas })
        } catch (error) {
            res.render('500')
        }
    }

    static addPengajuanDanaForm = async (req, res) => {

        try {

            const users = await User.findAll()
            const methods = await Method.findAll()

            return res.render('addPengajuanDana', {
                users: users,
                methods: methods
            })

        } catch (error) {
            return res.render('500')
        }

    }

    static addPengajuanDana = async (req, res) => {
        try {
            const data = {
                userId: req.body.userId,
                amount: req.body.amount,
                methodId: req.body.methodId
            };

            await PengajuanDana.create(data)

            return res.redirect('/app/pengajuandana')
        } catch (error) {
            return res.render('500')
        }
    }

    static deletePengajuanDana = async (req, res) => {

        try {
            const id = req.params.id

            await PengajuanDana.destroy({
                where: {
                    id: id
                }
            })

        } catch (error) {
            res.render('500')
        }
    }

    static editPengajuanDanaform = async (req, res) => {
        try {
            const id = req.params.id

            const users = await User.findAll()
            const methods = await Method.findAll()
            const pengajuanDana = await PengajuanDana.findOne({
                where: {
                    id
                }
            })

            if (!pengajuanDana) {
                return res.render('404')
            }

            res.render('editPengajuanDana', {
                pengajuanDana: pengajuanDana,
                users: users,
                methods: methods
            })

        } catch (error) {
            res.render('500')
        }
    }

    static updatePengajuanDana = async (req, res) => {
        try {
            const id = req.body.id;
            const data = {
                userId: req.body.userId,
                amount: req.body.amount,
                methodId: req.body.methodId
            };

            await PengajuanDana.update(data, {
                where: { id: id }
            });

            return res.redirect('/app/pengajuandana')
        } catch (error) {
            return res.render('500')
        }
    }
}

module.exports = PengajuanDanaController