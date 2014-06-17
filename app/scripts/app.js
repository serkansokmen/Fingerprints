'use strict';

angular.module('fingerprintsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'colorpicker.module',
    'ui.router',
    'firebase'
])
.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider.
        state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        }).
        state('stamps', {
            url: '/composite',
            templateUrl: 'views/stamps/composite.html',
            controller: 'StampsController'
        }).
        state('stamp', {
            url: '/create',
            templateUrl: 'views/stamps/create.html',
            controller: 'StampFormController'
        });

    $urlRouterProvider.otherwise('/');
})
.constant('FIREBASE_URL', 'https://fingerprints.firebaseio.com')
.run(function ($rootScope, PresenceService){
    $rootScope.totalViewers = 0;
    $rootScope.$on('onOnlineUser', function() {
        $rootScope.$apply(function() {
            $rootScope.totalViewers = PresenceService.getOnlineUserCount();
        });
    });
    $rootScope.$on('onOnlineStatusChange', function() {
        $rootScope.$apply(function() {
            $rootScope.connected = PresenceService.getOnlineStatus();
        });
    });
});
