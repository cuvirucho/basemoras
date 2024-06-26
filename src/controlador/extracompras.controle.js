const catchError = require('../utils/catchError');
const Comprsextra = require('../modelos/Comprsextra');

const getAll = catchError(async(req, res) => {
    const results = await Comprsextra.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Comprsextra.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Comprsextra.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Comprsextra.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Comprsextra.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


const compraFASfin = catchError(async (req, res) => {
    const {FECHACRADA } = req.body;
  
    const user = await Comprsextra.findAll({ where: {  FECHACRADA} });
    if (!user) return res.status(401).json({ message: "no deayuno no encontrado" });
    
    return res.json(user);
  });
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    compraFASfin
}