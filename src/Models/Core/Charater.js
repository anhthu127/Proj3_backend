import { DataTypes, Sequelize } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from "../../connections/sequelize"
export default class Charater extends BaseModel {
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
        type: Sequelize.STRING(225),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(225),
        allowNull: true
    },
    dOb: {
        type: Sequelize.DATE,
        allowNull: true
    },
    born_in: {
        type: Sequelize.STRING(225),
        allowNull: true
    },
    gender: {
        type: Sequelize.UUID,
        allowNull: false
    },
    height: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
}

function beforeCreate() {
    Comment.beforeCreate((obj, __) => {
        return obj.id == UUIDV4()
    })
}

const options = {
    tableName: 'charaters',
    beforeCreate: beforeCreate
}

Charater.init(attributes, { ...options, sequelize })