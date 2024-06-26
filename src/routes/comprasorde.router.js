const { getAll, create, getOne, remove, update, comprdoS } = require('../controlador/comprasorde.contolre');
const express = require('express');

const OrdendecompraRouter = express.Router();

OrdendecompraRouter.route('/compras')
    .get(getAll)
    .post(create);
OrdendecompraRouter.route('/comprado')
    .post(comprdoS);
OrdendecompraRouter.route('/compras/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = OrdendecompraRouter;