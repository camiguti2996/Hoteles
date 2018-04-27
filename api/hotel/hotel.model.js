const mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    'nombreHotel' : { type: String, required: true },
    'foto' : { type: String, required: true },
    'latitud' : { type: String, required: true },
    'longitud' : { type: String, required: true },
    'provincia' : { type: String, required: true },
    'canton' : { type: String, required: true },
    'distrito' : { type: String, required: true },
    'direccion' : { type: String, required: true },
    'telefono' : { type: String, required: true },
    'correoSC' : { type: String, required: true },
    'telefonoReserv' : { type: String, required: true },
    'correoReserv' : { type: String, required: true }
    
});

module.exports = mongoose.model('Hotel', HotelSchema);