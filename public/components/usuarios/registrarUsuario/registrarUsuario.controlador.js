(() => {
  'use strict';
    angular
    .module('trotamundos')
    .controller('registroUsuarioControlador', registroUsuarioControlador);
  
    registroUsuarioControlador.$inject = ['$state', '$http', '$location', 'usuarioServicio'];
  
    function registroUsuarioControlador($state, $http, $location, usuarioServicio){
      let vm = this;
      vm.nuevoUsuario = {}; 
  
      vm.registrarUsuario = (pnuevoUsuario) => {
        console.log(pnuevoUsuario);

        pnuevoUsuario.tipoUsuario = 'Cliente';

        let nuevoUsuario = new Cliente(pnuevoUsuario.cedula, pnuevoUsuario.primerNombre, pnuevoUsuario.segundoNombre, pnuevoUsuario.primerApellido, pnuevoUsuario.segundoApellido, pnuevoUsuario.correo, pnuevoUsuario.contrasenna, pnuevoUsuario.tipoUsuario,pnuevoUsuario.fechaNacimiento, pnuevoUsuario.telefono);

        let success = usuarioServicio.setUsuario(nuevoUsuario);
  
        // if(success == 'Se registró el usuario correctamente'){
    
        //   swal("Registro exitoso", "El cliente ha sido registrado correctamente", "success", {
        //     button: "Aceptar",
        //   });
        //   $location.path('/inicioSesion');
        // }

        if (success == true) {
          swal({
              title: "Registro exitoso",
              text: "El usuario se ha registrado correctamente",
              icon: "success",
              button: "Aceptar"
          });
          vm.nuevoUsuario = null;
      } else {
          swal({
              title: "Registro fallido",
              text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
              icon: "error",
              button: "Aceptar"
          });
      }
      
      }
    }
  })();