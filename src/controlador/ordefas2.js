const catchError = require('../utils/catchError');
const Ordenesfase2 = require('../modelos/Ordenesfase2');
const Resta = require('../modelos/Resta');
const Bodega = require('../modelos/Bodega');

const getAll = catchError(async(req, res) => {
    const results = await Ordenesfase2.findAll({include:{model:Resta,as:'restum',include:{model:Bodega}}});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Ordenesfase2.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordenesfase2.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Ordenesfase2.truncate();
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordenesfase2.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const pedidoFAS2 = catchError(async (req, res) => {
    const {mesa ,completa } = req.body;
  
    const user = await Ordenesfase2.findAll({ where: {mesa,completa},include:{model:Resta,as:'restum',include:{model:Bodega}}});
    if (!user) return res.status(401).json({ message: "no deayuno no encontrado" });
    
    return res.json(user);
  });
  
const pedidoFASfin = catchError(async (req, res) => {
    const {FECHACRADA } = req.body;
  
    const user = await Ordenesfase2.findAll({ where: {  FECHACRADA} });
    if (!user) return res.status(401).json({ message: "no deayuno no encontrado" });
    
    return res.json(user);
  });
  
  const boarrunos = catchError(async(req, res) => {
    const { id } = req.params;
    await Ordenesfase2.destroy({ where: {id} });
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    pedidoFAS2,
    boarrunos,
    pedidoFASfin
}