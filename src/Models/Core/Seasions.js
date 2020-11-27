import { DataTypes, Sequelize, UUIDV4 } from "sequelize/types";
import BaseModel from "./BaseModel";
import sequelize from '../../connections/sequelize'
export default class Seasion extends BaseModel {
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
        type: DataTypes.STRING(225),
        allowNull: false
    },
    movie_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    total_ep: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    preview_url: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING(225),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}

function beforeCreate() {
    Seasion.beforeCreate((obj, __) => {
        return obj.id = UUIDV4()
    })
}

const options = {
    tableName: 'seasions',
    beforeCreate: beforeCreate
}

Seasion.init(attributes, { ...options, sequelize })
