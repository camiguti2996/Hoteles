
(() => {
    'use strict';
    angular
      .module('trotamundos')
      .controller('modificarUsuarioControlador', modificarUsuarioControlador);
  
      modificarUsuarioControlador.$inject = ['$http', '$stateParams', '$state', 'usuarioServicio'];
  
    function modificarUsuarioControlador($http, $stateParams, $state, usuarioServicio) {
  
      let vm = this;
  
      vm.nuevosDatosUsuario = {};
  
      let userParams = JSON.parse($stateParams.objTempUser);
      let selectedUser = Object.assign(new Client(), userParams);
  
      vm.newUserData.id = selectedUser.id;
      vm.newUserData.firstName = selectedUser.firstName;
      vm.newUserData.secondName = selectedUser.secondName;
      vm.newUserData.firstSurname = selectedUser.firstSurname;
      vm.newUserData.secondSurname = selectedUser.secondSurname;
      vm.newUserData.email = selectedUser.email;
      vm.newUserData.password = selectedUser.password;
      vm.newUserData.birthdate = new Date(selectedUser.birthdate);
      vm.newUserData.phone = selectedUser.phone;
  
      vm.updateUserData = (pupdateuser) => {
        let success = userService.updateUser(pupdateuser);
      };
    }
  })();