'use strict';

angular.module('fingerprintsApp').
    directive('colorPicker', function($rootScope, $window, $log){
        return {
            restrict: 'A',
            scope: {
                model: '='
            },
            template: '<button type="color" style="border:none; background-color: {{ model }};" class="btn" ng-model="model"></button>'
        };
    });
