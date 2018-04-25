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
      vm.edit = (pUser) => {
        // console.log(pUser);
        $state.go('usersEdit', { objTempUser: JSON.stringify(pUser) })
      }
    }
  })();
  