(function() {
    'use strict';

    angular
        .module('app')
        .controller('contactController', contactController);

    contactController.$inject = [];

    function contactController() {

        /* jshint validthis: true */
        var vm = this;
        vm.contact = 'contact';
    }
})();