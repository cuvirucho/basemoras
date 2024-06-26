const catchError = require('../utils/catchError');
const Desayunos = require('../modelos/Desayunos');
const Resta = require('../modelos/Resta');
const Bodega = require('../modelos/Bodega');

const getAll = catchError(async(req, res) => {
    const results = await Desayunos.findAll({include:[Resta]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Desayunos.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Desayunos.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Desayunos.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { nombre } = req.params;
    const result = await Desayunos.update(
        req.body,
        { where: {nombre}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


const pedido = catchError(async (req, res) => {
    const {nombre } = req.body;
  
    const user = await Desayunos.findOne({ where: {  nombre } },{include:[Resta]});
  
    if (!user) return res.status(401).json({ message: "no deayuno no encontrado" });
    
    return res.json(user);
  });
  

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    pedido
}