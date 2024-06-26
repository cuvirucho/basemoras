const Bodega = require("./Bodega");
const Desayunos = require("./Desayunos");
const EmailCode = require("./EmailCode");
const Ordenesfase2 = require("./Ordenesfase2");
const Perosnal = require("./Perosnal");
const Resta = require("./Resta");



EmailCode.belongsTo(Perosnal)
Perosnal.hasOne(EmailCode)




Desayunos.belongsTo(Resta)
Resta.hasOne(Desayunos)

Resta.belongsToMany(Bodega,{through:"Reseta_estandar"}  )
Bodega.belongsToMany(Resta, {through:"Reseta_estandar"}   )



Ordenesfase2.belongsTo(Resta)
Resta.hasMany(Ordenesfase2)