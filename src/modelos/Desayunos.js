const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Desayunos = sequelize.define('desayunos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detalles: {
        type: DataTypes.STRING,
      
    },
    mesa: {
        type: DataTypes.STRING,
       
    }
    /*idresta*/
});

module.exports = Desayunos;