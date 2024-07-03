const { Method } = require("../models")

class MethodController {
    static getMethodPage = async (req, res) => {
        try {
            const methods = await Method.findAll({
                attributes: ['id', 'methodName']
            })

            res.render('method', { methods: methods })
        } catch (error) {
            res.render('500')
        }
    }
}

module.exports = MethodController