import { getCurrentDate } from "../libs/constants";

class UserController {
    constructor() {
        this.state = {
            datetime: getCurrentDate
        }
    }

    
}


export default new UserController();