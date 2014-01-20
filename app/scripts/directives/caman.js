'use strict';

angular.module('fingerprintsApp').
    directive('caman', function($rootScope, $log){
        return {
            restrict: 'A',
            scope: {
                color: '=',
                source: '=',
                top: '=',
                left: '='
            },
            template: '<canvas style="position:absolute; top: {{ top - width/2 }}px; left: {{ left - height/2 }}px;"></canvas>',
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {
                $scope.width = 40;
                $scope.height = 40;
                $scope.$watch('source', function(newVal, oldVal) {
                    Caman(iElm[0], newVal, function () {
                        $scope.width = this.width;
                        $scope.height = this.height;
                        this.colorize($scope.color, 100);
                        this.render();
                    });
                });
                $scope.$watch('color', function(newVal, oldVal) {
                    Caman(iElm[0], $scope.source, function () {
                        this.colorize(newVal, 100);
                        this.render();
                    });
                });
            }
        };
    }).
    directive('camanThumb', function($rootScope, $log){
        return {
            restrict: 'A',
            scope: {
                source: '=',
                thumbWidth: '@',
                thumbHeight: '@'
            },
            template: '<canvas width="{{ thumbWidth }}" height="{{ thumbHeight }}"></canvas>',
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {
                $scope.$watch('source', function(newVal, oldVal) {
                    Caman(iElm[0], newVal, function () {
                        this.resize({
                            width: iAttrs.thumbWidth,
                            height: iAttrs.thumbHeight
                        });
                        this.render();
                    });
                });
            }
        };
    });

