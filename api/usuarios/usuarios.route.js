const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/save_user')
  .post((req, res) => {
    usuarios.registrarUsuario(req,res);
});

router.route('/get_all_users')
  .get((req, res) => {
    usuarios.listarUsuario(req,res);
});

router.route('/update_users')
  .put((req, res) => {
    usuarios.updateUsuario(req,res);
});

module.exports = router;