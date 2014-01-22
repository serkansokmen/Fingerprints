'use strict';

angular.module('fingerprintsApp').
    directive('fingerprint', function(){
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
            link: function($scope, iElm) {
                $scope.width = 80;
                $scope.height = 80;
                $scope.$watch('source', function(newVal) {
                    Caman(iElm[0], newVal, function () {
                        $scope.width = this.width;
                        $scope.height = this.height;
                        this.colorize($scope.color, 100);
                        this.render();
                    });
                });
                $scope.$watch('color', function(newVal) {
                    Caman(iElm[0], $scope.source, function () {
                        this.colorize(newVal, 100);
                        this.render();
                    });
                });
            }
        };
    }).
    directive('stamp', function(){
        return {
            restrict: 'A',
            scope: {
                model: '='
            },
            template: '<canvas style="position:absolute; top: {{ model.top-width/2 }}px; left: {{ model.left-height/2 }}px;"></canvas>',
            replace: true,
            link: function($scope, iElm) {
                $scope.width = 80;
                $scope.height = 80;
                $scope.$watch('model.fingerprint.thumbnail', function(newVal){
                    Caman(iElm[0], newVal, function () {
                        $scope.width = this.width;
                        $scope.height = this.height;
                        this.colorize($scope.model.color, 100);
                        this.render();
                    });
                });
            }
        };
    }).
    directive('fingerprintThumb', function(){
        return {
            restrict: 'A',
            scope: {
                source: '=',
                thumbWidth: '@',
                thumbHeight: '@'
            },
            template: '<canvas width="{{ thumbWidth }}" height="{{ thumbHeight }}"></canvas>',
            replace: true,
            link: function($scope, iElm, iAttrs) {
                $scope.$watch('source', function(newVal) {
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

