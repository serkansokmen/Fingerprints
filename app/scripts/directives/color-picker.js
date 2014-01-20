'use strict';

angular.module('fingerprintsApp').
    directive('colorPicker', function($rootScope, $window, $log){
        return {
            scope: {
                model: '='
            },
            restrict: 'EA',
            template: '<input type="color" class="form-control input-lg" ng-model="model">',
            link: function($scope, iElm, iAttrs, controller) {

            }
        };
    });
