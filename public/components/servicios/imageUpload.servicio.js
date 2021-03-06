(() => {
  'use strict';
  angular
  .module('trotamundos')
  .service('imageUpload', imageUpload);

  imageUpload.$inject = ['$http'];

  function imageUpload($http){
    const cloudObj = {
      url:'https://api.cloudinary.com/v1_1/camiguti29/image/upload',
      data:{
        upload_preset: 'trotamundos',
        tags:'Any',
        context:'photo=test'
      }
    };

    const uploadAPI = {
      getConfiguration : _getConfiguration
    };
    return uploadAPI;

    function _getConfiguration() {
      return cloudObj;
    }
  };
})();