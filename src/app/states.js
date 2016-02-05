(function () {
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

        $urlRouterProvider.otherwise('');

        $locationProvider.html5Mode(true);

        $stateProvider
        .state('home', {
           url: '/',
           controller: 'homeController as vm',
           templateUrl: '/app/home/home.tpl.html'
            }
        )
        .state('contact', {
            url: '/contact',
            controller: 'contactController as vm',
            templateUrl: '/app/contact/contact.tpl.html'
        })
        .state('about', {
            url: '/about',
            controller: 'aboutController as vm',
            templateUrl: '/app/about/about.tpl.html'
        });
    }

})();
