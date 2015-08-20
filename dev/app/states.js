(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = [
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('index');

        $locationProvider.html5Mode(true);

        $stateProvider.state('index', {
           'url': '/index',
           'controllerAs': 'vm',
           'controller': 'document',
           'templateUrl': '/app/partials/document.tpl.html'
            }
        );
    }

})(angular);
