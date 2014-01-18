'use strict';

angular.module('fingerprintsApp').
    directive('processing', function($rootScope, $window, $log){
        return {
            scope: true,
            link: function($scope, iElm, iAttrs, controller) {
                $scope.$sketch = new Processing(iElm[0], $scope[iAttrs.processing]);

                angular.element($window).bind('resize',function(evt){
                    resizeSketch();
                });
                resizeSketch();

                function resizeSketch() {
                    $scope.$sketch.size(iElm.parent().outerWidth() - 10, iElm.parent().outerHeight());
                }
            }
        };
    });
