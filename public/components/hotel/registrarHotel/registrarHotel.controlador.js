(() => {
    'use strict';
    angular
        .module('trotamundos')
        .controller('registroHotelControlador', registroHotelControlador);

        registroHotelControlador.$inject = ['$http', 'NgMap', 'hotelServicio', 'Upload', 'imageUpload'];

    function registroHotelControlador($http, NgMap, hotelServicio, Upload, imageUpload) {
        let vm = this;

        vm.provincias = $http({
            method: 'GET',
            url: './sources/data/provincias.json'
        }).then((success) => {
            vm.provincias = success.data;
        }, (error) => {
            console.log("Ocurrió un error " + error.data);
        });

        vm.rellenarCantones = (pidProvincia) => {
            vm.cantones = $http({
                method: 'GET',
                url: './sources/data/cantones.json'
            }).then((success) => {
                let cantones = [];
                for (let i = 0; i < success.data.length; i++) {
                    if (pidProvincia == success.data[i].idProvincia) {
                        cantones.push(success.data[i]);
                    }
                }
                vm.cantones = cantones;
            }, (error) => {
                console.log("Ocurrió un error " + error.data)
            });
        }

        vm.rellenarDistrito = (pidCanton) => {
            vm.distritos = $http({
                method: 'GET',
                url: './sources/data/distritos.json'
            }).then((success) => {
                let distritos = [];
                for (let i = 0; i < success.data.length; i++) {
                    if (pidCanton == success.data[i].idCanton) {
                        distritos.push(success.data[i]);
                    }
                }
                vm.distritos = distritos;
            }, (error) => {
                console.log("Ocurrió un error " + error.data);
            });
        }

        NgMap.getMap("map").then((map) => {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
            vm.map = map;
        });

        vm.getCurrentLocation = ($event) => {
            let postion = [$event.latLng.lat(), $event.latLng.lng()];
            console.log(postion);
            vm.current = postion;
        }

        vm.nuevoHotel = {};

        vm.cloudObj = imageUpload.getConfiguration();

        vm.preRegistrarHotel = (pnuevoHotel) => {
            console.log('pregistrar');
            vm.cloudObj.data.file = pnuevoHotel.foto[0];
            Upload.upload(vm.cloudObj).success((data) => {
                vm.registerHotel(pnuevoHotel, data.url);
            });
        }

        vm.registerHotel = (pnuevoHotel, urlImage) => {
            console.log('registrar');

            pnuevoHotel._id = 0;
            pnuevoHotel.latitud = vm.current[0];
            pnuevoHotel.longitud = vm.current[1];
            pnuevoHotel.foto = urlImage;

            console.log(pnuevoHotel);

            let nuevoHotel = Object.assign(new Hotel(), pnuevoHotel);

            console.log(nuevoHotel);

            let success = hotelServicio.setHotel(nuevoHotel);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El usuario se ha registrado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.nuevoHotel = null;
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