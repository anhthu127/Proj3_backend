import { DataTypes, UUIDV4 } from "sequelize/types";
import BaseModel from "./BaseModel";
import sequelize from '../../connections/sequelize'


export default class Like extends BaseModel {
    static association() {

    }
}

const attributes = {

    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    account_id: {
        type: DataTypes.UUID,
        allowNull: true
    },
    movies_id: {
        type: DataTypes.UUID,
        allowNull: true
    },
    episode_id: {
        type: DataTypes.UUID,
        allowNull: true
    }

}

function beforeCreate() {
    Like.beforeCreate((obj, __) => {
        return obj.id = UUIDV4()
    })
}

const options ={ 
    tableName: 'like',
    beforeCreate: beforeCreate
}

Like.init(attributes, { ...options, sequelize})