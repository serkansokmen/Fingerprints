'use strict';

angular.module('fingerprintsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'colorpicker.module'
])
  .config(function ($stateProvider) {
    // 'initializing', 'dashboard', 'loading', 'question', 'checkingAnswer'
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('stamps', {
        url: '/stamps',
        templateUrl: 'views/stamps/base.html'
      })
      .state('stamps.create', {
        url: '/create',
        templateUrl: 'views/stamps/create.html',
        controller: 'StampsCreateController'
      })
      .state('stamps.list', {
        url: '/list',
        templateUrl: 'views/stamps/list.html',
        controller: 'StampsListController'
      })
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
