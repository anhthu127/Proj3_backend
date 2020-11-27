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
<<<<<<< HEAD
    name: {
=======
    lastname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    firstname: {
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
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
<<<<<<< HEAD
    city: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
    district: {
        type: DataTypes.STRING(80),
        allowNull: true
    },
=======
    
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
    location: {
        type: DataTypes.STRING(225),
        allowNull: true
    },
<<<<<<< HEAD
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
=======
    location_code: {
        type: DataTypes.CHAR(10),
        allowNull: true
    },
    // create_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    // update_at: {
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    last_login: {
        type: DataTypes.DATE,
        allowNull: true
>>>>>>> 63987b55fb327d250f7adba015d39cd1720c54a6
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