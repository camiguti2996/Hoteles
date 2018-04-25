
(() => {
  'use strict';
  angular
  .module('trotamundos')
  .directive('sidebarPrincipal', sidebarPrincipal);

  sidebarPrincipal.$inject = ['inicioSesionServicio'];

  function sidebarPrincipal(inicioSesionServicio){

    let sidebarController = function () {  
      let authUsuario = inicioSesionServicio.getAuthUsuario();
      let vm = this;
      vm.rolUsuario = authUsuario.getTipoUsuario();
    };

    let navegacion = {
      templateUrl: 'components/directivas/sidebar/sidebar.vista.html',
      restrict: 'EA',
    };
    return navegacion;
  };
})();
