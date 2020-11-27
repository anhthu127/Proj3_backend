<<<<<<< HEAD
import { DataTypes, Sequelize } from "sequelize";
=======
import { DataTypes } from "sequelize";
import Sequelize from 'sequelize';

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
import BaseModel from "./BaseModel.js";
import sequelize from '../../connections/sequelize.js'


export default class Account extends BaseModel {
    static association() {

<<<<<<< HEAD
    }
}

=======

    }
}
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
<<<<<<< HEAD
    user: {
        type: DataTypes.UUID,
        allowNull: false
    },
=======

    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    username: {
        type: DataTypes.STRING(45),
        allowNull: false

    },
    password: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
<<<<<<< HEAD
    create_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    update_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
=======

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
<<<<<<< HEAD
=======

>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}
<<<<<<< HEAD
function beforeCreate() {
    User.beforeCreate((obj, _) => {
=======

function beforeCreate() {
    Account.beforeCreate((obj, _) => {
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
        return obj.id = uuidv4();
    })
}

const options = {
    tableName: 'accounts',
    beforeCreate: beforeCreate
}

<<<<<<< HEAD
Account.init(attributes, { ...options, sequelize });
=======
Account.init(attributes, { ...options, sequelize });
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
