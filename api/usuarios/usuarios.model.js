
let mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    cedula           : { type:String },
    primerNombre     : { type:String },
    segundoNombre    : { type:String },
    primerApellido   : { type:String },
    segundoApellido  : { type:String },
    correo           : { type:String },
    contrasenna      : { type:String },
    tipoUsuario      : { type:String },
    fechaNacimiento  : { type:String },
    telefono         : { type:String },
});

var usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = usuario;