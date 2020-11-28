import { DataTypes, Sequelize, UUIDV4 } from "sequelize";
import BaseModel from "./BaseModel";
import sequelize from '../../connections/sequelize'
export default class UniMovie extends BaseModel {
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
    charater_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    movie_id: {
        type: DataTypes.UUID,
        allowNull: true
    }

}

function beforeCreate() {
    Seasion.beforeCreate((obj, __) => {
        return obj.id = UUIDV4()
    })
}

const options = {
    tableName: 'uni_movies',
    beforeCreate: beforeCreate
}

UniMovie.init(attributes, { ...options, sequelize })
