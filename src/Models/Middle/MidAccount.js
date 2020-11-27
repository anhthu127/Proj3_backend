<<<<<<< HEAD
=======
import { generateToken } from "../../libs/token.js"
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
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
<<<<<<< HEAD

        if (account != null) {

        }
=======
        console.log(account);
        if (account === null) {
            throw new Error("Account is not exist")
        } else {
            const data = {
                username: account.username,
                user_id: account.user_id
            }
            return await generateToken(data)
        }

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
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
<<<<<<< HEAD
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
=======
            throw new Error("Account is exist!")
        } else {
            const data = {
                email: request.email,
                phone: request.phone,
                lastname: request.lastName,
                firstname: request.firstName,
                location: request.location,
                location_code: request.location_code,
                city: request.city,
                district: request.district
                //createdAt: request.create_at
            }
            const created = await User.create(data)
            // console.log("-----   CREATED        " + JSON.stringify(created));
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
            const user = await User.findOne({
                where: {
                    email: request.email,
                    phone: request.phone,
<<<<<<< HEAD

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


=======
                }
            })
            if (user != null) {
                const account = {
                    username: request.username,
                    password: request.password,
                    email: request.email,
                    phone: request.phone,
                    createdAt: request.create_at,
                    user_id: user.id
                }
                await Account.create(account)
                return 0;
            }


        }
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    }
}
export default new MidAccount()