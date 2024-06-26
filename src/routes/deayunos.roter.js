const { getAll, create, getOne, remove, update, pedido } = require('../controlador/desayuno.controle');
const express = require('express');

const DesayunosRouter = express.Router();

DesayunosRouter.route('/desayunos')
    .get(getAll)
    .post(create);
DesayunosRouter.route("/pedido")
.post(pedido)

DesayunosRouter.route('/desayunos/:nombre')
    .get(getOne)
    .delete(remove)
    .put(update);


module.exports = DesayunosRouter;   