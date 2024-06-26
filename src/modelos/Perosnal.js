const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Perosnal = sequelize.define('perosnal', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isVerify: {
        type: DataTypes.BOOLEAN,
    },

    
});



Perosnal.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.contraseña;
    return values;
}
module.exports = Perosnal;