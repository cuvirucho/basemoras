const catchError = require("../utils/catchError");
const Perosnal = require("../modelos/Perosnal");
const bcrypt = require("bcrypt");
const EmailCode = require("../modelos/EmailCode");
const sendEmail = require("../utils/sendEmail");
const getAll = catchError(async (req, res) => {
  const results = await Perosnal.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const { nombre, apellido, contraseña, baseurl, email } = req.body;
  const ecnritcontra = await bcrypt.hash(contraseña, 10);

  const result = await Perosnal.create({
    email,
    nombre,
    apellido,
    contraseña: ecnritcontra,
  });

  const cryp = require("crypto").randomBytes(5).toString("hex");

  const linkvery = `${baseurl}/${cryp}`;

  await EmailCode.create({
    CLAVE: cryp,
    perosnalID: result.id,
  });

  await sendEmail({
    to: email,
    subject: "Verificacion de correo Moritas coffe",
    html: `
<h1>hola ${nombre} ${apellido}</h1>
<p>Acaba el proceso de verificacion</p>
<a href="${linkvery}"> has click aqui =>${linkvery} </a>
`,
  });

  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Perosnal.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Perosnal.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Perosnal.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const veryfic = catchError(async (req, res) => {
  const { CLAVE } = req.params;
  const emailcode = await EmailCode.findOne({ where: { CLAVE: CLAVE } });

  if (!emailcode) return res.status(401).json({ Message: "invlido codifo" });

  const user = await User.findByPk(emailcode.perosnalID);
  perosnal.isVerify = true;
  await perosnal.save();

  await emailcode.destroy();

  return res.json(user);
});

const login = catchError(async (req, res) => {
  const { email, contraseña } = req.body;

  const user = await Perosnal.findOne({ where: {  email } });

  if (!user) return res.status(401).json({ message: "no user" });
  const isvalid = await bcrypt.compare(contraseña, user.contraseña);
  if (!isvalid) return res.status(401).json({ message: "mal contraseña" });

  return res.json(user);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  veryfic,
  login
};
