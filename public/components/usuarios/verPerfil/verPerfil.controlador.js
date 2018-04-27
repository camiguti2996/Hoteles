(() => {
    'use strict';
    angular
        .module('trotamundos')
        .controller('verPerfilControlador', verPerfilControlador);

        verPerfilControlador.$inject = ['inicioSesionServicio'];

    function verPerfilControlador(inicioSesionServicio) {
        let vm = this;

        const autUsuario = inicioSesionServicio.getAuthUsuario();

        if (autUsuario == undefined) {
            $state.go('inicioSesion');
        } 
        
        vm.infoUsuario = autUsuario;
    }
})();