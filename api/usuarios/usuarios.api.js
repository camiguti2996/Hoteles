const usuarioModelo = require('./usuarios.model');

module.exports.registrarUsuario = (req, res) => {
  var nuevoUsuario = new usuarioModelo({
    cedula           :  req.body.cedula,
    primerNombre     :  req.body.primerNombre,
    segundoNombre    :  req.body.segundoNombre,
    primerApellido   :  req.body.primerApellido,
    segundoApellido  :  req.body.segundoApellido,
    correo           :  req.body.correo,
    contrasenna      :  req.body.contrasenna,
    tipoUsuario      :  req.body.tipoUsuario,
    fechaNacimiento  :  req.body.fechaNacimiento,
    telefono         :  req.body.telefono,
  });

  nuevoUsuario.save((err) => {
    if (err) {
      res.json({ success: false, msj: 'Ha ocurrido un error en el registro de usuarios' + err });
    } else {
      res.json({ success: true, msj: 'Se registró el usuario correctamente' });
    }
  });
};

module.exports.listarUsuario = (req, res) => {
  usuarioModelo.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.updateUsuario = (req, res) => {
  usuarioModelo.update({cedula: req.body.cedula}, req.body, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

    } else {
      res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
    }
  });
};