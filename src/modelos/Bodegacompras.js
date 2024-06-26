const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Bodegacompras = sequelize.define('bodegacompras', {
    ingredientes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.STRING,
     
    },
    costo: {
        type: DataTypes.STRING,
    },
    ninimo: {
        type: DataTypes.STRING,
    },
    maximo: {
        type: DataTypes.STRING,
    },
});

module.exports = Bodegacompras;