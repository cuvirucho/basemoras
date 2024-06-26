const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Resta = sequelize.define('resta', {
   /*idingedite*/




    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },


    /*id desyuno*/
});

module.exports = Resta;