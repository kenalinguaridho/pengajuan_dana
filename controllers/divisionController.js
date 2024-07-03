const
    { Division } = require('../models')

class DivisionController {
    static getDivisionPage = async (_, res) => {
        try {
            console.log('mengakses halaman divisions');
            const divisions = await Division.findAll({
                attributes: ['id', 'divisionName']
            })

            res.render('division', { divisions: divisions })
        } catch (error) {
            res.render('500')
        }
    }
}

module.exports = DivisionController