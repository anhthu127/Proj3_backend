import { DataTypes, Sequelize } from 'sequelize'
import BaseModel from '../Core/BaseModel.js'
import sequelize from '../../connections/sequelize.js'
export default class User extends BaseModel {

    static association() {

    }
}


const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4

    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ava: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    district: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    location: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    create_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    update_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    last_login: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}

function beforeCreate() {
    User.beforeCreate((obj, _) => {
        return obj.id = uuidv4();
    })
}

const options = {
    tableName: 'users',
    beforeCreate: beforeCreate
}

User.init(attributes, { ...options, sequelize });