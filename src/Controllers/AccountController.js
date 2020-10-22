import { getCurrentDate } from "../libs/constants.js";
import  MidAccount from "../Models/Middle/MidAccount.js"

class AccountController {
    constructor() {
        this.state = {
            datetime: getCurrentDate
        }
    }

    loginAccount = (req, res) => {
        account = req.body
        return 0;
    }
    registAccount = (req, res) => {
        const account = req.body
        const request = {
            ...account,
            create_at: this.state.datetime
        }
        return MidAccount.register(request)
    }
}

export default new AccountController();