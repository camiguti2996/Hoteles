(() => {
    'use strict'
    angular
    .module('trotamundos')
    .service('hotelServicio', hotelServicio);
  
    hotelServicio.$inject = ['$http', '$log', 'dataStorageFactory']
  
    function hotelServicio($http, $log, dataStorageFactory) {
        const hotelAPI = {
            setHotel : _setHotel,
            getHotel : _getHotel
        }
        return hotelAPI;
  
        function _setHotel(hotelDatos){
            let listaHoteles = _getHotel(),
                repeat = false,
                success;
  
            for (let i = 0; i < listaHoteles.length; i++) {
                if(listaHoteles[i].getIdHotel() === hotelDatos.getIdHotel()){
                    repeat = true;
                }
            }
  
            if(repeat == false){
                success = dataStorageFactory.setDatosHotel(hotelDatos);
            }else{
                success = false;
            }
  
            return success;
        }
  
        function _getHotel(){
            let hotelDatos = dataStorageFactory.getDatosHotel(),
            listaHoteles = [];
  
            hotelDatos.forEach(obj => {
                let tempHotel = Object.assign(new Hotel(), obj);
  
                listaHoteles.push(tempHotel);
            });
  
            return listaHoteles;
        }
    }
  })();