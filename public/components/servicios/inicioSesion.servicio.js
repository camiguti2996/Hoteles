(() =>{
    'use strict';
    angular
    .module('trotamundos')
    .service('inicioSesionServicio', inicioSesionServicio);

    inicioSesionServicio.$inject = ['usuarioServicio', 'dataStorageFactory'];

    function inicioSesionServicio(usuarioServicio, dataStorageFactory){
        const inicioSesionAPI ={
            inicioSesion : _inicioSesion,
            cierreSesion : _cierreSesion,
            getAuthUsuario : _getAuthUsuario
        };

        return inicioSesionAPI;

        function _inicioSesion(pCredenciales){
            let listaUsuarios = usuarioServicio.getUsuario(),
                success = false;
            
                for (let i = 0; i<listaUsuarios.length; i++) {
                    if (listaUsuarios[i].getCorreo() === pCredenciales.correo && listaUsuarios[i].getContrasenna() === pCredenciales.contrasenna) {

                        let credencialesCorrectos = {
                            id : listaUsuarios[i].getCedula(),
                            rol : listaUsuarios[i].getRol() 
                        }

                        success =                         dataStorageFactory.setSesion(credencialesCorrectos);
                    }                    
                }

                return success;
        }

        function _cierreSesion(){
            let cierreSesion = dataStorageFactory.cierreSesion();
            return cierreSesion;
        }

        function _getAuthUsuario() {
            let sesionActiva = dataStorageFactory.getSession(),
                datosUsuarios;

            if (!sesionActiva) {
                datosUsuarios = undefined;
            } else {
                datosUsuarios = obtenerDatosUsuarioActivo(sesionActiva.id);
            }

            return datosUsuarios;
        }


        function obtenerDatosUsuarioActivo(pcedula) {
            let userList = userService.getUsers(),
                userData;

            for (let i = 0; i < userList.length; i++) {
                if (userList[i].getcedula() == pcedula) {
                    userData = userList[i];
                }
            };

            return userData;
        }
     
    }
})();