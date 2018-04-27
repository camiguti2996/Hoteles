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
            updateUsuario : _updateUsuario,
            setSession: _setSession,
            getSession: _getSession,
            closeSession: _closeSession,
            setDatosHotel : _setDatosHotel,
            getDatosHotel: _getDatosHotel
        };

        return localStorageAPI;

    function _setDatosUsuario(usuariosDatos) {
        let respuesta;

        let request = $.ajax({
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

        request.done((res) => {
            respuesta = res.success;
            console.log('Petición realizada con éxito');
        });
        request.fail((error) => {
            respuesta = error;
            console.log('Ocurrió un error');
        });

        return respuesta;
    }

    function _getDatosUsuarios() {
        let listaUsuarios = [];

        let request = $.ajax({
            url: 'http://localhost:4000/api/get_all_users',
            type: 'get',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {}
        });

        request.done((listaUsuariosBD) => {
            console.log(listaUsuariosBD);
            listaUsuarios = listaUsuariosBD;
        });
        request.fail(() => {
            listaUsuarios = [];
            console.log('Ocurrió un error');
        });

        return listaUsuarios;
    }

    function _updateUsuario(usuariosDatos) {
        let respuesta;
  
        let request = $.ajax({
            url: 'http://localhost:4000/api/update_users',
            type: 'put',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
              'cedula' : usuariosDatos.cedula, 
              'primerNombre' : usuariosDatos.primerNombre, 
              'segundoNombre' : usuariosDatos.segundoNombre, 
              'primerApellido' : usuariosDatos.primerApellido,  
              'segundoApellido' : usuariosDatos.segundoApellido, 
              'correo' : usuariosDatos.correo, 
              'contrasenna' : usuariosDatos.contrasenna, 
              'tipoUsuario' : usuariosDatos.tipoUsuario,
              'fechaNacimiento' : usuariosDatos.fechaNacimiento,
              'telefono' : usuariosDatos.telefono
            }
        });
        request.done((res) => {
            respuesta = res.success;
            console.log('Petición realizada con éxito');
        });
        request.fail((error) => {
            respuesta = error;
            console.log('Ocurrió un error');
        });
  
        return respuesta;
    }

    function _setSession(value) {
        let respuesta = true;
        sessionStorage.setItem('session', JSON.stringify(value));
        return respuesta;
    }

    function _closeSession() {
        let respuesta = true;
        sessionStorage.removeItem('session');
        return respuesta;
    }

    function _getSession() {
        let sesionActiva = JSON.parse(sessionStorage.getItem('session'));
        return sesionActiva;
    }

    function _setDatosHotel(hotelDatos) {
        let response;
    
        let request = $.ajax({
            url: 'http://localhost:4000/api/save_hotel',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: false,
            data: {
              'nombreHotel' : hotelDatos.nombreHotel,
              'foto': hotelDatos.foto, 
              'latitud' : hotelDatos.latitud, 
              'longitud' : hotelDatos.longitud,  
              'provincia' : JSON.stringify(hotelDatos.provincia), 
              'canton' : JSON.stringify(hotelDatos.canton), 
              'distrito' : JSON.stringify(hotelDatos.distrito), 
              'direccion' : hotelDatos.direccion,
              'telefono' : hotelDatos.telefono,
              'correoSC' : hotelDatos.correoSC,
              'telefonoReserv' : hotelDatos.telefonoReserv,
              'correoReserv' : hotelDatos.correoReserv
            }
        });
        request.done((res) => {
            response = res.success;
            console.log('Petición realizada con éxito');
        });
        request.fail((error) => {
            response = error;
            console.log('Ocurrió un error');
        });
        return response;
    }
    
    
    function _getDatosHotel(){
      let listaHotel = [];

      let request = $.ajax({
        url:'http://localhost:4000/api/get_all_hotels',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        async: false,
        data: {}
      });
    request.done((listaHotelBD) => {
      console.log('Datos que vienen de la BD');
      console.log(listaHotelBD);
      listaHotel = listaHotelBD;
    });
    
    request.fail(() => {
      console.log('Ha ocurrido un error');
      listaHotel = [];
    });
    return listaHotel;
    }

}

})();