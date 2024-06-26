const { getAll, create, getOne, remove, update } = require('../controlador/OKBodega.contler');
const express = require('express');

const okbodegRouter  = express.Router();

okbodegRouter.route('/OKBODEGA')
    .get(getAll)
    .post(create);

okbodegRouter.route('/OKBODEGA/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = okbodegRouter  ;