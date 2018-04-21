(() => {
    'use strict';
    angular
    .module('Mĩ́shka', ['appRoutes', 'ngMessages', 'duScroll', 'ngFileUpload', 'ngAnimate'])
    .value('duScrollDuration', 2000)
    .value('duScrollOffset', 30);

})();