'use strict';

angular.module('fingerprintsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'colorpicker.module',
    'ui.router',
    'firebase'
]).
config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.
        state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        state('stamps', {
            url: '/stamps',
            templateUrl: 'views/stamps/base.html'
        }).
        state('stamps.list', {
            url: '/list',
            templateUrl: 'views/stamps/list.html',
            controller: 'StampsController'
        }).
        state('stamps.form', {
            url: '/form',
            templateUrl: 'views/stamps/form.html',
            controller: 'StampFormController'
        });

    $urlRouterProvider.otherwise('/');
}).
constant('FB_URL', 'https://fingerprints.firebaseio.com').
run(function ($rootScope, PresenceService){
    $rootScope.totalViewers = 0;
    $rootScope.$on('onOnlineUser', function() {
        $rootScope.$apply(function() {
            $rootScope.totalViewers = PresenceService.getOnlineUserCount();
        });
    });
});
