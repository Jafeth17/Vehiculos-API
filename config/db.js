require('dotenv').config(); 

const { Sequelize } = require('sequelize');

/**
 * Conexión a la base de datos
 * 
 * Esta configuración establece la conexión a la base de datos MySQL utilizando Sequelize.
 * Los datos de conexión se obtienen de las variables de entorno definidas en el archivo .env.
 */
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;
