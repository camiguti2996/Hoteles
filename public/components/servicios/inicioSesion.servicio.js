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
                            rol : listaUsuarios[i].getTipoUsuario()
                        }

                        success = dataStorageFactory.setSession(credencialesCorrectos);
                    }                    
                }

                return success;
        }

        function _cierreSesion(){
            let cierreSesion = dataStorageFactory.closeSession();
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


        function obtenerDatosUsuarioActivo(pCedula) {
            let listaUsuarios = usuarioServicio.getUsuario(),
                datosUsuarios;

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].getCedula() == pCedula) {
                    datosUsuarios = listaUsuarios[i];
                }
            };

            return datosUsuarios;
        }
     
    }
})();