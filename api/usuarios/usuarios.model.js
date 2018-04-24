
const mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    cedula: {type:String, required:true, index:{unique:true}},
    primerNombre: {type:String, required:true},
    segundoNombre : {type:String},
    primerApellido : {type:String, required:true},
    segundoApellido : {type:String},
    correo : {type:String, required:true},
    contrasenna : {type:String, required:true},
    tipoUsuario : {type:String, required:true},
    fechaNacimiento : {type:Date},
    telefono : {type:String}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);