import { Sequelize, DataTypes, UUIDV4, } from "sequelize/types";
import BaseModel from "./BaseModel";
import sequelize from '../../connections/sequelize'

export default class Episode extends BaseModel {
    static association()

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
    seasion_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}
function beforeCreate() {
    Episode.beforeCreate((obj, __) => {
        return obj.id = UUIDV4()
    })
}

const options = {
    tableName: 'episodes',
    beforeCreate: beforeCreate
}

Episode.init(attributes, { ...options, sequelize })