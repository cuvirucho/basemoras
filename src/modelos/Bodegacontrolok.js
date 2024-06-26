const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Bodegacontrolok = sequelize.define('bodegacontrolok', {
    FECHA: {
        type: DataTypes.STRING,

    },
    BODEGAOK: {
        type: DataTypes.STRING,
 
    },
    NOTAS: {
        type: DataTypes.STRING,
 
    },
});

module.exports = Bodegacontrolok;