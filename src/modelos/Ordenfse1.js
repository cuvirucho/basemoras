const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Ordenfse1 = sequelize.define('ordenfse1', {
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
        type: DataTypes.STRING,
       
    },
    restumId: {
        type: DataTypes.STRING,
       
    },
//id resta *//


});

module.exports = Ordenfse1; 