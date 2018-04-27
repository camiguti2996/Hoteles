(() => {
    angular
    .module('trotamundos')
    .controller('listaUsuariosControlador', listaUsuariosControlador);
  
    listaUsuariosControlador.$inject = ['$stateParams', '$state','usuarioServicio'];
  
    function listaUsuariosControlador($stateParams, $state, usuarioServicio){
      const vm = this;
      vm.listaUsuarios = listarUsuariosBD();
  
      function listarUsuariosBD(){
        let listaUsuariosBD = usuarioServicio.getUsuario();
        let usuarios=[];
        listaUsuariosBD.forEach(usuario =>{
          if(usuario.tipoUsuario == 'Cliente'){
            usuarios.push(usuario);
          }
        });
        return usuarios;
      }
      vm.editar = (pusuario) => {
        // console.log(pUser);
        $state.go('main.modificarUsuario', { objTempUsuario: JSON.stringify(pusuario) })
      }
    }
  })();
  