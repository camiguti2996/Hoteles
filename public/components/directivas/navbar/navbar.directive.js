(() => {
    'use strict';
    angular
        .module('trotamundos')
        .directive('navbarDirectiva', navbarDirectiva);

    navbarDirectiva.$inject = ['$state', 'inicioSesionServicio'];

    function navbarDirectiva($state, inicioSesionServicio) {

        let navbarControlador = function () {
            let vm = this;
            let usuario = inicioSesionServicio.getAuthUsuario();
            vm.usuarioSesion = usuario.getNombre();
            angular.element('#btnCerrarSesion').on('click', function () {
                swal("Desea cerrar la sesión?", {
                        buttons: {
                            cancel: "Cancelar",
                            cerrarSesion: {
                                text: "Cerrar sesión",
                                value: "cerrarSesion",
                            },
                        },
                    })
                    .then((value) => {
                        switch (value) {
                            case "cerrarSesion":
                            inicioSesionServicio.cierreSesion();
                                $state.go('inicioSesion');
                                swal({
                                    title: "Sesión cerrada correctamente",
                                    text: "Se ha finalizado su sesión correctamente",
                                    icon: "success",
                                    button: "Aceptar",
                                });
                                break;

                            default:
                                break;
                        }
                    })
            })
        };

        let navegacion = {
            templateUrl: '/components/directivas/navbar/navbar.vista.html',
            restrict: 'EA',
            require: "ngClick",
            controller: navbarControlador,
            controllerAs: 'vm'
        };
        return navegacion;
    };
})();