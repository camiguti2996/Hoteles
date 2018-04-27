const hotelModelo = require('./hotel.model');

module.exports.registrarHotel = (req, res) => {
  var nuevoHotel = new hotelModelo({
    nombreHotel     : req.body.nombreHotel,
    foto            : req.body.foto,
    latitud         : req.body.latitud,
    longitud        : req.body.longitud,
    provincia       : req.body.provincia,
    canton          : req.body.canton,
    distrito        : req.body.distrito,
    direccion       : req.body.direccion,
    telefono        : req.body.telefono,
    correoSC        : req.body.correoSC,
    telefonoReserv  : req.body.telefonoReserv,
    correoReserv    : req.body.correoReserv
  });

  nuevoHotel.save((err) => {
    if (err) {
      res.json({ success: false, msj: 'Ha ocurrido un error en el registro de usuarios ' + err });
    } else {
      res.json({ success: true, msj: 'Se registró el usuario correctamente' });
    }
  });
};

module.exports.listarHotel = (req, res) => {
    hotelModelo.find().then((hoteles) => {
    res.send(hoteles);
  });
};

module.exports.updateHotel = (req, res) => {
    hotelModelo.update({idHotel: req.body.idHotel}, req.body, (err, hotel) => {
    if (err) {
      res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

    } else {
      res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
    }
  });
};