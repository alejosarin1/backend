const { sequelize } = require('./database');

const initDB = async () => {
    try {
        await sequelize.query('CREATE DATABASE IF NOT EXISTS prueba');
        await sequelize.query('USE prueba');
        await sequelize.query(`
            CREATE TABLE IF NOT EXISTS users (
                nombre VARCHAR(255) NOT NULL,
                correo VARCHAR(255) NOT NULL,
                contraseña VARCHAR(255) NOT NULL,

                PRIMARY KEY (correo)
            )`);
        await sequelize.query(`INSERT INTO users (nombre, correo, contraseña) VALUES ('pruebas','prueba@gmail.com','prueba');`)
    } catch (error) {
        console.error('Error initializing the database:', error);
    } finally {
        await sequelize.close();
    }
};

module.exports = initDB;
