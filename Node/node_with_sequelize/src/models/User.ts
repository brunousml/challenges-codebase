import {Model, DataTypes} from "sequelize"
const connection = require('../database')
class User extends Model {}

User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize: connection,
        modelName: 'User'
})

export default User