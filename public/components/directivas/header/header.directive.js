(() => {
    'use strict';
    angular
      .module('trotamundos')
      .directive('headerDirective', headerDirective);
  
    function headerDirective(){
      const navegacion = {
        templateUrl: '/components/directivas/header/header.vista.html',
        restrict: 'EA' 
      };
  
      return navegacion;
    }
  })();