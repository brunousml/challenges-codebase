export const dbConfig = {
    database: 'brain',
    username: 'user',
    password: 'pass',
    options: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        define:{
            timestamps: true,
            underscored: true
        }
    }
}

