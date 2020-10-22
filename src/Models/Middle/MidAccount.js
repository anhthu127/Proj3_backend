import Account from "../Core/Account.js"
import User from "../Core/User.js"

class MidAccount {

    login = async (request) => {
        const account = await Account.findOne({
            where: {
                username: request.username,
                password: request.password
            }
        })

        if (account != null) {

        }
    }

    register = async (request) => {
        const isChecked = await Account.findOne({
            where: {
                email: request.email,
                phone: request.phone,
                username: request.username,
                password: request.password
            }
        })

        if (isChecked != null) {
            return ('Account is exist')
        } else {
            user = {
                email: request.email,
                phone: request.phone,
                name: request.name,
                location: request.location,
                city: request.city,
                district: request.district,
                create_at: request.create_at

            }
            User.create(user)
            const user = await User.findOne({
                where: {
                    email: request.email,
                    phone: request.phone,

                }
            })
            const account = {
                username: request.username,
                password: request.password,
                email: request.email,
                phone: request.phone,
                create_at: request.create_at,
                user_id: user.user_id
            }
            Account.create(account)
        }


    }
}
export default new MidAccount()