const catchError = require('../utils/catchError');
const Ordendecompra = require('../modelos/Ordendecompra');
const sendEmail = require('../utils/sendEmail');
const { Where } = require('sequelize/lib/utils');

const getAll = catchError(async(req, res) => {
    const results = await Ordendecompra.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Ordendecompra.create(req.body);
    await sendEmail({
        to: "daniel.eonerdo@gmail.com",
        subject: "compras",
        html: `
        <h1>hola Daniel </h1>
        <p>tines una  orden de compras pendeinete </p>
        <a > has click aqui =>-------------</a>
`,
});
return res.status(201).json(result)
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordendecompra.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Ordendecompra.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ordendecompra.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const comprdoS = catchError(async (req, res) => {
    const {comprdo } = req.body;
  
    const user = await Ordendecompra.findAll({ where: {comprdo} });
    if (!user) return res.status(401).json({ message: "no deayuno no encontrado" });
    
    return res.json(user);
  });
  




module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    comprdoS
}