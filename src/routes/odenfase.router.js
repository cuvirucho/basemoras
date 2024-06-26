const { getAll, create, getOne, remove, update, pedidoFAS2, boarruno, boarrunos, pedidoFASfin,  } = require('../controlador/ordefas2');
const express = require('express');

const Ordenesfase2Router = express.Router();

Ordenesfase2Router.route('/ordenfs2')
    .get(getAll)
    .post(create)
    .delete(remove)


 Ordenesfase2Router.route("/pedidoFAS2")
    .post(pedidoFAS2)
 Ordenesfase2Router.route("/pedidoFIN")
    .post(pedidoFASfin)


Ordenesfase2Router.route('/ordenfs2/:id')
    .get(getOne)
    .delete(boarrunos) 
    .put(update);

module.exports = Ordenesfase2Router;