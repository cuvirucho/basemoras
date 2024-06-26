const { getAll, create, getOne, remove, update, boarruno } = require('../controlador/ordesfas1.controlador');
const express = require('express');

const Ordenfse1Router = express.Router();

Ordenfse1Router.route('/ordenes')
    .get(getAll)
    .delete(remove)
    .post(create);

Ordenfse1Router.route('/ordenes/:id')
    .get(getOne)
    .delete(boarruno)
    .put(update)

module.exports = Ordenfse1Router;