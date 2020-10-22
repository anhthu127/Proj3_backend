import { DataTypes, UUIDV4 } from "sequelize/types";
import BaseModel from "./BaseModel";
import sequelize from '../../connections/sequelize'


export default class Comment extends BaseModel {
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
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

}
function beforeCreate() {
    Comment.beforeCreate((obj, __) => {
        return obj.id == UUIDV4()
    })
}

const options = {
    tableName: 'comments',
    beforeCreate: beforeCreate
}

Comment.init(attributes, { ...options, sequelize })