(() => {
    'use strict';
    angular
        .module('trotamundos')
        .service('usuarioServicio', usuarioServicio);

    usuarioServicio.$inject = ['$http', '$log', 'dataStorageFactory'];

    function usuarioServicio($http, $log, dataStorageFactory) {
        let usuariosAPI = {
            setUsuario: _setUsuario,
            getUsuario: _getUsuario
        }
        return usuariosAPI;

        function _setUsuario(dataUsuario) {
            let listaUsuarios = _getUsuario(),
                repeat = false,
                success;

            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].getCedula() === dataUsuario.getCedula()) {
                    repeat = true;
                }
            }
            if (repeat == false) {
                success = dataStorageFactory.setDatosUsuario(dataUsuario);
            } else {
                success = false;
            }
            return success;
        }

        function _getUsuario() {
            let dataUsuarios = dataStorageFactory.getDatosUsuarios(),
                listaUsuarios = [];

            dataUsuarios.forEach(obj => {
                if (obj.tipoUsuario == 1) {
                    let nuevoAdmin = Object.assign(new Admin(), obj);
                    listaUsuarios.push(nuevoAdmin)
                } else {
                    let nuevoCliente = Object.assign(new Cliente(), obj);
                    listaUsuarios.push(nuevoCliente);
                }
            });
            return listaUsuarios;
        }

        // function _updateUsuario(usuarioEditado) {
        //     let success = false;
        //     success = dataStorageFactory.updateUsuario(usuarioEditado);
        //     return success;
        // }
    }
})()