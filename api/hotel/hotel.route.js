const express  = require('express'),
      router   = express.Router(),
      hoteles = require('./hotel.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_hotel')
  .post((req, res) => {
    hoteles.registrarHotel(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */

router.route('/get_all_hotels')
  .get((req, res) => {
    hoteles.listarHotel(req,res);
});

/**
 * Función que actualiza los usuarios
 */

router.route('/update_hotels')
  .put((req, res) => {
    hoteles.updateHotel(req,res);
});

module.exports = router;