(() => {
    'use strict';
    angular
    .module('trotamundos')
    .service('usuarioServicio', usuarioServicio);

    usuarioServicio.$inject = ['$http', '$log', 'dataStorageFactory'];

    function usuarioServicio($http, $log, dataStorageFactory) {
        const usuariosAPI = {
            setUsuario: _setUsuario,
            getUsuario: _getUsuario,
            updateUsuario : _updateUsuario
        }
        return usuariosAPI;

        function _setUsuario(pnuevoUsuario) {
            let registro;

            registro = dataStorageFactory.setDatosUsuario(pnuevoUsuario);

            return registro;
        }

        function _getUsuario() {
            let usuariosDatos = dataStorageFactory.getDatosUsuarios(),
                listaUsuarios = [];

            usuariosDatos.forEach(obj => {
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

        function _updateUsuario(usuarioEditado) {
            let success = false;
            success = dataStorageFactory.updateUsuario(usuarioEditado);
            return success;
        }

        // function _updateUser(userEdited){
        //     let success = false;
        //     success = dataStorageFactory.updateUser(userEdited);
        //     return success;
        //   }
    }
})();