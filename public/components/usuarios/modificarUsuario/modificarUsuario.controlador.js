(() => {
  'use strict';
  angular
    .module('trotamundos')
    .controller('modificarUsuarioControlador', modificarUsuarioControlador);

    modificarUsuarioControlador.$inject = ['$http', '$stateParams', '$state', 'usuarioServicio'];

  function modificarUsuarioControlador($http, $stateParams, $state, usuarioServicio) {

    let vm = this;

    vm.nuevosDatosUsuario = {};

    let usuarioParams = JSON.parse($stateParams.objTempUsuario);
    let usuarioSeleccionado = Object.assign(new Cliente(), usuarioParams);

    vm.nuevosDatosUsuario = Object.assign(usuarioParams, vm.nuevosDatosUsuario);

    // vm.nuevosDatosUsuario.cedula = usuarioSeleccionado.cedula;
    // vm.nuevosDatosUsuario.primerNombre = usuarioSeleccionado.primerNombre;
    // vm.nuevosDatosUsuario.segundoNombre = usuarioSeleccionado.segundoNombre;
    // vm.nuevosDatosUsuario.primerApellido = usuarioSeleccionado.primerApellido;
    // vm.nuevosDatosUsuario.segundoApellido = usuarioSeleccionado.segundoApellido;
    // vm.nuevosDatosUsuario.correo = usuarioSeleccionado.correo;
    // vm.nuevosDatosUsuario.contrasenna = usuarioSeleccionado.contrasenna;
    // vm.nuevosDatosUsuario.fechaNacimiento = new Date(usuarioSeleccionado.fechaNacimiento);
    // vm.nuevosDatosUsuario.telefono = usuarioSeleccionado.telefono;

    vm.actualizarUsuario = (pnuevosDatosUsuario) => {
      let success = usuarioServicio.updateUsuario(pnuevosDatosUsuario);
      $state.go('main.listarUsuario');
    };
  }
})();