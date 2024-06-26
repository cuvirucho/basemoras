const { getAll, create, getOne, remove, update, compraFASfin } = require('../controlador/extracompras.controle');
const express = require('express');

const ComprsextraRoter = express.Router();

ComprsextraRoter.route('/extracopm')
    .get(getAll)
    .post(create);
ComprsextraRoter.route('/extracopdia')
    .post(compraFASfin);

ComprsextraRoter.route('/extracopm/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = ComprsextraRoter;