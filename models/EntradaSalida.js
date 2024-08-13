const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Vehiculo = require('./vehiculo');

const EntradaSalida = sequelize.define('EntradaSalida', {
    nombreMotorista: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    kilometraje: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'entradas_salidas'
});

// Relación con el modelo Vehiculo
EntradaSalida.belongsTo(Vehiculo, { foreignKey: 'vehiculoId' });

module.exports = EntradaSalida;
