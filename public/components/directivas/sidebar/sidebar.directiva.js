
  (() => {
    'use strict';
    angular
    .module('trotamundos')
    .directive('sidebarPrincipal', sidebarPrincipal);
    
    function sidebarPrincipal(){
      let navegacion = {
        templateUrl: './sidebar.directiva.js',
        restrict: 'EA'
      };
  
      return navegacion;
    }
  })();
  