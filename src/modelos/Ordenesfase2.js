const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Ordenesfase2 = sequelize.define('ordenesfase2', {
    nombre: {
        type: DataTypes.STRING,
      
    },
   
    
    detalles: {
        type: DataTypes.STRING,
        
    },
    mesa: {
        type: DataTypes.STRING,
   
    },
    costo: {
        type: DataTypes.INTEGER,
       
    },
    completa: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
       
    },
    Pagado: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
       
    },
    
   
    FECHACRADA: {
        type: DataTypes.STRING,
       
    },
});

module.exports = Ordenesfase2;