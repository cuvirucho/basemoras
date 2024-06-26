const { getAll, create, getOne, remove, update } = require('../controlador/bodegacompras.conto');
const express = require('express');

const bodgRoute = express.Router();

bodgRoute.route('/bocompar')
    .get(getAll)
    .post(create);

bodgRoute.route('/bocompar/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = bodgRoute;