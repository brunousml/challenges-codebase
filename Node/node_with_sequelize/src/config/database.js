const dbConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'user',
    password: 'pass',
    database: 'sequelize_db',
    define:{
        timestamps: true,
        underscored: true
    }
}

module.exports = dbConfig