'use strict';

angular.module('fingerprintsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider) {

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
      .state('stamps.list', {
        url: '/list',
        templateUrl: 'views/stamps/list.html',
        controller: 'StampsController'
      })
      .state('stamps.form', {
        url: '/form',
        templateUrl: 'views/stamps/form.html',
        controller: 'StampFormController'
      });
  });
