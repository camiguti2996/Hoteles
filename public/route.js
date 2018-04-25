(() => {
    'use strict'
    angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider

        .state('landingPage',{
            url:'/',
            templateUrl: './components/landingPage/landingPage.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            }
        })

        .state('inicioSesion',{
            url:'/inicioSesion',
            templateUrl: './components/inicioSesion/inicioSesion.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                  return $ocLazyLoad.load('./components/inicioSesion/inicioSesion.controlador.js')
                }]
              },
              controller: 'inicioSesionControlador',
              controllerAs: 'vm'
        })

        .state('main',{
            url:'/main',
            templateUrl: './components/main/main.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                  return $ocLazyLoad.load('./components/main/main.controlador.js')
                }]
              },
              controller: 'mainControlador',
              controllerAs: 'vm'
        })

        .state('registroUsuario',{
            url:'/registroUsuario',
            templateUrl: './components/usuarios/registrarUsuario/registrarUsuario.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                  return $ocLazyLoad.load('./components/usuarios/registrarUsuario/registrarUsuario.controlador.js')
                }]
              },
              controller: 'registroUsuarioControlador',
              controllerAs: 'vm'
        })

        .state('listarUsuario',{
            url:'/listarUsuario',
            templateUrl: './components/usuarios/listarUsuario/listaUsuario.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                  return $ocLazyLoad.load('./components/usuarios/listarUsuario/listaUsuario.controlador.js')
                }]
              },
              controller: 'listaUsuariosControlador',
              controllerAs: 'vm'
        })


        .state('modificarUsuario',{
            url:'/modificarUsuario',
            templateUrl: './components/usuarios/modificarUsuario/modificarUsuario.vista.html',
            data:{
                pageTitle: 'Trotamundos'
            },
            resolve: {
                load: ['$ocLazyLoad', ($ocLazyLoad) => {
                  return $ocLazyLoad.load('./components/usuarios/modificarUsuario/modificarUsuario.controlador.js')
                }]
              },
              controller: 'modificarUsuarioControlador',
              controllerAs: 'vm'
        })

        $urlRouterProvider.otherwise('/');
    }
})();