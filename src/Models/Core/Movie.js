import { DataTypes, Sequelize } from "sequelize";
import BaseModel from "./BaseModel.js";
import sequelize from '../../connections/sequelize.js'


export default class Movie extends BaseModel {
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

    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    link: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

}
function beforeCreate() {
    User.beforeCreate((obj, _) => {
        return obj.id = uuidv4();
    })
}

const options = {
    tableName: 'movies',
    beforeCreate: beforeCreate
}

Movie.init(attributes, { ...options, sequelize });