const express  = require('express'),
      router   = express.Router(),
      usuarios = require('./usuarios.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_user')
  .post((req, res) => {
    usuarios.registrarUsuario(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */

router.route('/get_all_users')
  .get((req, res) => {
    usuarios.listarUsuario(req,res);
});

/**
 * Función que actualiza los usuarios
 */

router.route('/update_users')
  .put((req, res) => {
    usuarios.updateUsuario(req,res);
});

// router.route('/login')
//   .put((req,res) => {
//     usuarios.iniciarSesion(req,res);
//   });

module.exports = router;