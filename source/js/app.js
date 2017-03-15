(function(angular) {
    'use strict';
    
    angular
        .module('app', ['ui.router'])
        .config(Configuration);
    
    Configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function Configuration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/home.html'
            })
            .state('newsletter', {
                url: '/newsletter',
                templateUrl: 'partials/newsletter.html'
            })
            .state('programs', {
                url: '/programs',
                templateUrl: 'partials/programs.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact.html'
            })
            
        $urlRouterProvider.otherwise('/');
    }
}(this.angular));