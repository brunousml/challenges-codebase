import {Model, DataTypes, ModelStatic} from "sequelize"

const connection = require('../database')

class User extends Model {
    static associate(models: { Address: ModelStatic<Model<any, any>> }) {
        this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'})
    }
}

User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize: connection,
})

export default User