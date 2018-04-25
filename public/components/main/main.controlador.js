(() => {
    'use strict';
    angular
    .module('trotamundos')
    .controller('mainControlador', mainControlador);
  
    mainControlador.$inject = ['$state', 'inicioSesionServicio']
  
    function mainControlador($state, inicioSesionServicio){
      let vm = this;
  
      vm.usuarioAuth = inicioSesionServicio.getAuthUsuario();
  
      if(!vm.usuarioAuth){
        $state.go('inicioSesion');
      }
    }
  })();