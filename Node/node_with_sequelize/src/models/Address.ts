import {Model, DataTypes, ModelStatic} from "sequelize"

const connection = require('../database')

class Address extends Model {
    static associate(models: { User: ModelStatic<Model<any, any>> }) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

Address.init({
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
    }, {
        sequelize: connection,
})

Address.associate(connection.models)


export default Address