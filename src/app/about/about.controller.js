(function() {
    'use strict';

    angular
        .module('app')
        .controller('aboutController', aboutController);

    aboutController.$inject = [];

    function aboutController() {

        /* jshint validthis: true */
        var vm = this;
        vm.about = 'about';
    }
})();