(() => {
    angular
    .module('trotamundos')
    .controller('registroUsuarioControlador', registroUsuarioControlador);
  
    registroUsuarioControlador.$inject = ['usuarioServicio'];
  
    function registroUsuarioControlador(usuarioServicio){
      const vm = this;
      vm.nuevoUsuario = {};
  
      vm.registrarUsuario = (pnuevoUsuario) => {
        pnuevoUsuario.tipoUsuario = 2;

        let nuevoUsuario = Object.assign(new Cliente(), pnuevoUsuario);
        let success = usuarioServicio.setUsuario(nuevoUsuario);
  
        if(success == true){
          swal({
            title: "Registro Exitoso",
            text: "El usuario se ha registrado correctamente",
            icon: "sucess",
            button: "Aceptar"
          });

          vm.nuevoUsuario = null;

        }else{
          swal({
            title: "Registro Fallido",
            text: "Ha ocurrido un error, inténtelo más tarde",
            icon: "error",
            button: "Aceptar",
          });
        }
      }
    }
  })();