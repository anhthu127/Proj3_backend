import { DataTypes, Sequelize } from "sequelize";
import BaseModel from "./BaseModel.js";
import sequelize from '../../connections/sequelize.js'


export default class Account extends BaseModel {
    static association() {

    }
}

const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    user: {
        type: DataTypes.UUID,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false

    },
    password: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    create_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    update_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}
function beforeCreate() {
    User.beforeCreate((obj, _) => {
        return obj.id = uuidv4();
    })
}

const options = {
    tableName: 'accounts',
    beforeCreate: beforeCreate
}

Account.init(attributes, { ...options, sequelize });