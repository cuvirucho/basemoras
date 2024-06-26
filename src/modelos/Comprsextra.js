const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Comprsextra = sequelize.define('comprsextra', {
    TITULO: {
        type: DataTypes.STRING,
    },
    DESCRIPCION: {
        type: DataTypes.STRING,
      
    },
    COSTO: {
        type: DataTypes.STRING,
      
    },
    FECHACRADA: {
        type: DataTypes.STRING,
      
    },
});

module.exports = Comprsextra;