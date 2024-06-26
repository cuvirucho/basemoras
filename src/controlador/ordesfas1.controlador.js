const catchError = require('../utils/catchError');
const Ordenfse1 = require('../modelos/Ordenfse1');
const { all } = require('../routes');

const getAll = catchError(async(req, res) => {
    const results = await Ordenfse1.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Ordenfse1.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordenfse1.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Ordenfse1.truncate();
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordenfse1.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});


const boarruno = catchError(async(req, res) => {
    const { id } = req.params;
    await Ordenfse1.destroy({ where: {id} });
    return res.sendStatus(204);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    boarruno
}   