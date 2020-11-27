import { getCurrentDate } from "../libs/constants.js";
import MidAccount from "../Models/Middle/MidAccount.js"

class AccountController {
    constructor() {
        this.state = {
            datetime: getCurrentDate
        }
    }

    loginAccount = (req, res) => {
        const account = req.body
<<<<<<< HEAD
        return 0;
=======
        const response = MidAccount.login(account);

        return response
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    }
    registAccount = (req, res) => {
        const account = req.body
        const request = {
<<<<<<< HEAD
            ...account,
            create_at: this.state.datetime
=======
            ...account
            //create_at: this.state.datetime
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
        }
        return MidAccount.register(request)
    }
}

export default new AccountController();