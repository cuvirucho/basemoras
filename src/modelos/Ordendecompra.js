const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Ordendecompra = sequelize.define('ordendecompra', {
    ingredientes: {
        type: DataTypes.STRING,
       
    },
    cantidad: {
        type: DataTypes.STRING,
   
    },
    costo: {
        type: DataTypes.STRING,
      
    },
    maximo: {
        type: DataTypes.STRING,
       
    },
    ninimo: {
        type: DataTypes.STRING,
        
    },
    comprdo: {
        type: DataTypes.BOOLEAN,
    defaultValue:false
    },
    fecha: {
        type: DataTypes.STRING,
    },
});

module.exports = Ordendecompra;