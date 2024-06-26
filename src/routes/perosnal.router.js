const {
  getAll,
  create,
  getOne,
  remove,
  update,
  veryfic,
  login,
} = require("../controlador/personal.contole");
const express = require("express");

const PerosnalRouter = express.Router();

PerosnalRouter.route("/personal").get(getAll).post(create);

PerosnalRouter.route("/login").post(login);

PerosnalRouter.route("/personal/veryfi/:contra").get(veryfic);

PerosnalRouter.route("/personal/:id").get(getOne).delete(remove).put(update);

module.exports = PerosnalRouter;
