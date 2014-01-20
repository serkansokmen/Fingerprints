'use strict';

angular.module('fingerprintsApp').
    directive('fingerprint', function($rootScope, $log){
        return {
            restrict: 'A',
            scope: {
                color: '=',
                source: '=',
                top: '=',
                left: '='
            },
            template: '<canvas style="position:absolute; top: {{ top-width/2 }}px; left: {{ left-height/2 }}px;"></canvas>',
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {
                $scope.width = 80;
                $scope.height = 80;
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
    directive('stamp', function($rootScope, $log){
        return {
            restrict: 'A',
            scope: {
                model: '='
            },
            template: '<canvas style="position:absolute; top: {{ model.top-width/2 }}px; left: {{ model.left-height/2 }}px;"></canvas>',
            replace: true,
            link: function($scope, iElm, iAttrs, controller) {
                $log.info($scope.model);
                $scope.width = 80;
                $scope.height = 80;
                Caman(iElm[0], $scope.model.fingerprint.thumbnail, function () {
                    $scope.width = this.width;
                    $scope.height = this.height;
                    this.colorize($scope.model.color, 100);
                    this.render();
                });
            }
        };
    }).
    directive('fingerprintThumb', function($rootScope, $log){
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

