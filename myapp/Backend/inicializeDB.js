
const {sequelize} = require('./database');

const initDB = async () => {
    try{
        await sequelize.query('CREATE DATABASE IF NOT EXISTS prueba');
        await sequelize.query('USE prueba');
        await sequelize.query('CREATE TABLE IF NOT EXISTS users (correo varchar(255) not null, contraseña varchar(255) not null,PRIMARY KEY (correo))');
    }
    catch (error) {
        console.error('Error initializing the database:', error);
    }
    finally {
        await sequelize.close();
    }
}
initDB()