const express = require('express');
const PerosnalRouter = require('./perosnal.router');
const Ordenfse1Router = require('./ordefas1.roter');
const DesayunosRouter = require('./deayunos.roter');
const RestaRouter = require('./reseta.router');
const BodegaRouter = require('./bodeg.roter');
const Ordenesfase2Router = require('./odenfase.router');
const bodgRoute = require('./bodegacompras.ruta');
const okbodegRouter = require('./okbogea.router');
const OrdendecompraRouter = require('./comprasorde.router');
const ComprsextraRoter = require('./extracomp.router');
const router = express.Router();

// colocar las rutas aquí
router.use(RestaRouter)
router.use(Ordenesfase2Router)
router.use(BodegaRouter)
router.use(DesayunosRouter)
router.use(Ordenfse1Router)
router.use(PerosnalRouter)
router.use(bodgRoute)
router.use(okbodegRouter)
router.use(OrdendecompraRouter)
router.use(ComprsextraRoter)
module.exports = router;