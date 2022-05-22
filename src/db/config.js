const DB_CONFIG = {
    HOST: 'localhost',
    DB: 'todo',
    USER: 'root',
    PASSWORD: 'root',
    dialect: 'mysql',
    pool: {
        min: 1,
        max: 20,
        idle: 10000,
        acquire: 60000
    },
}

module.exports = DB_CONFIG;