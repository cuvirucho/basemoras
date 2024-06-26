const catchError = require('../utils/catchError');
const Resta = require('../modelos/Resta');
const Bodega = require('../modelos/Bodega');

const getAll = catchError(async(req, res) => {
    const results = await Resta.findAll({include:[Bodega]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Resta.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Resta.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Resta.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Resta.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setRestaestanada = catchError(async (req,res) =>{
const {id}= req.params
const reseta = await Resta.findByPk(id)

if(!reseta) return res.status(404).json({message: "reseta no encontrada"} )

    await reseta.setBodegas(req.body)

const ingredites = await reseta.getBodegas()


return res.json(ingredites)
})





module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setRestaestanada
}