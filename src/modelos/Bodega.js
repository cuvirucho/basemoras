const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Bodega = sequelize.define('bodega', {
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
});

module.exports = Bodega;