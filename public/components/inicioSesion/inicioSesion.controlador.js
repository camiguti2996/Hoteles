(() => {
    angular
    .module('trotamundos')
    .controller('inicioSesionControlador', inicioSesionControlador);

    inicioSesionControlador.$inject = ['$state', 'inicioSesionServicio'];

    function inicioSesionControlador($state, inicioSesionServicio){
        let vm = this;

        vm.credenciales = {};

        vm.inicioSesion = (credenciales) => {
            let inicioSesionExitoso = inicioSesionServicio.inicioSesion(credenciales);

            if (inicioSesionExitoso == true) {
                $state.go('main');
            } else {
                swal({
                    title: "Ha fallado el inicio de sesión",
                    text: "Datos ingresados son incorrectos",
                    icon: "error",
                    button: "Aceptar",
                });
            }
        }
    }
})();