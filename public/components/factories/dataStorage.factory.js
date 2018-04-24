(() => {
    'use strict';
    angular
    .module('trotamundos')
    .factory('dataStorageFactory', dataStorageFactory);

    dataStorageFactory.$inject = ['$q', '$log', '$http'];
    
    function dataStorageFactory() {
        const localStorageAPI = {
            setDatosUsuario: _setDatosUsuario,
            getDatosUsuarios: _getDatosUsuarios,
            setSession: _setSession,
            getSession: _getSession,
            closeSession: _closeSession
        };

        return localStorageAPI;

    function _setDatosUsuario(usuariosDatos) {
        let respuesta;

        let peticion = $.ajax({
            url: 'http://localhost:4000/api/save_user',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
                cedula : usuariosDatos.cedula,
                primerNombre : usuariosDatos.primerNombre,
                segundoNombre : usuariosDatos.segundoNombre,
                primerApellido : usuariosDatos.primerApellido,
                segundoApellido : usuariosDatos.segundoApellido,
                correo : usuariosDatos.correo,
                contrasenna : usuariosDatos.contrasenna,
                tipoUsuario : usuariosDatos.tipoUsuario,
                fechaNacimiento  : usuariosDatos.fechaNacimiento,
                telefono : usuariosDatos.telefono
            }
        });

        peticion.done((res) => {
            respuesta = res.success;
            console.log('Petición realizada con éxito');
        });
        peticion.fail((error) => {
            respuesta = error;
            console.log('Ocurrió un error');
        });

        return respuesta;
    }

    function _getDatosUsuarios() {
        let listaUsuarios = [];

        let peticion = $.ajax({
            url: 'http://localhost:4000/api/get_all_users',
            type: 'get',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {}
        });

        peticion.done((listaUsuariosBD) => {
            console.log(listaUsuariosBD);
            listaUsuarios = listaUsuariosBD;
        });
        peticion.fail(() => {
            listaUsuarios = [];
            console.log('Ocurrió un error');
        });

        return listaUsuarios;
    }


    function _setSession(value) {
        let respuesta = true;
        sessionStorage.setItem('session', JSON.stringify(value));
        return respuesta;
    };

    function _closeSession() {
        let respuesta = true;
        sessionStorage.removeItem('session');
        return respuesta;
    }

    function _getSession() {
        let sesionActiva = JSON.parse(sessionStorage.getItem('session'));
        return sesionActiva;
    }

}

})();