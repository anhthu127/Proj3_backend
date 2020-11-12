import { DataTypes, Sequelize } from "sequelize";
import sequelize from '../../connections/sequelize'
const { default: BaseModel } = require("./BaseModel");

export default class Movies extends BaseModel {

}

const attributes = {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    author: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    link: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    image: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
    category: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    preview_id: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    character_movie_id: {
        type: DataTypes.STRING(80),
        allowNull: true
    },

}

function beforeCreate() {
    Account.beforeCreate((obj, _) => {
        return obj.id = uuidv4();
    })
}

const options = {
    tableName: 'movies',
    beforeCreate: beforeCreate
}

Movies.init(attributes, { ...options, sequelize });