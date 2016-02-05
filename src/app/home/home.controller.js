(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = [];

    function homeController() {

        /* jshint validthis: true */
        var vm = this;
        vm.home = 'home';
    }
})();