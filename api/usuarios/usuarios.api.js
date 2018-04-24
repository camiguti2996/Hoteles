const usuarioModelo = require('./usuarios.model');

module.exports.registrarUsuario = (req, res) => {
    var nuevoUsuario = Object.assign(new usuarioModelo(), req.body);

    nuevoUsuario.save((err) => {
        if(err){
            res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
          }else{
            res.json({success:true, msj:'Se registró el usuario correctamente'});
          }
    });
};

module.exports.listarUsuario = (req,res) => {
    usuarioModelo.find().then((usuarios) => {
      res.send(usuarios);
    });
  };

  module.exports.updateUsuario = (req,res) => {
    usuarioModelo.findByIdAndUpdate(req.body.id, { $set: req.body }, (err, user) => {
      if (err){
        res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});
  
      } else{
        res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
      }
    });
  }