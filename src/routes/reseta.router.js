const { getAll, create, getOne, remove, update, setRestaestanada } = require('../controlador/resta.controlo');
const express = require('express');

const RestaRouter = express.Router();

RestaRouter.route('/restas')
    .get(getAll)
    .post(create);

RestaRouter.route('/restas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

    RestaRouter.route('/restas/:id/bodega')
    .post(setRestaestanada);

module.exports = RestaRouter;