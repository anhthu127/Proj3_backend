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
        type: Sequelize.STRING(45)
    },
    image: {
        type: Sequelize.STRING(45)
    },
    dOb: {
        type: Sequelize.DATE
    },
    hometown: {
        type: Sequelize.STRING(225)
    },
    spouse: {
        type: Sequelize.STRING(225)
    },
    height: {
        type: Sequelize.INTEGER
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