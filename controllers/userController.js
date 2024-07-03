const { User } = require("../models")

class UserController {
    static getUserPage = async (_, res) => {
        try {
            const users = await User.findAll({
                attributes: ['id', 'name']
            })

            res.render('user', { users: users })
        } catch (error) {
            res.render('500')
        }
    }
}

module.exports = UserController