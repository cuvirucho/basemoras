const catchError = require('../utils/catchError');
const Bodegacompras = require('../modelos/Bodegacompras');

const getAll = catchError(async(req, res) => {
    const results = await Bodegacompras.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Bodegacompras.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Bodegacompras.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Bodegacompras.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Bodegacompras.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}