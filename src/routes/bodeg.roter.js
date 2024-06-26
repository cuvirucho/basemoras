const { getAll, create, getOne, remove, update } = require('../controlador/bodega.contole');
const express = require('express');

const BodegaRouter = express.Router();

BodegaRouter.route('/bodega')
    .get(getAll)
    .post(create);

BodegaRouter.route('/bodega/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = BodegaRouter;