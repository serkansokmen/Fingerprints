'use strict';

app
.directive('fingerprint', function(){
    return {
        restrict: 'A',
        scope: {
            color: '=',
            source: '=',
            top: '=',
            left: '='
        },
        template: '<canvas style="position:absolute;left:{{left-width/2}}px;top:{{top-height/2}}px;"></canvas>',
        replace: true,
        link: function($scope, iElm){
            $scope.width = 80;
            $scope.height = 80;
            $scope.$watch('source', function(newVal){
                Caman(iElm[0], newVal, function (){
                    $scope.width = this.width;
                    $scope.height = this.height;
                    this.colorize($scope.color, 100);
                    this.render();
                });
            });
            $scope.$watch('color', function(newVal){
                Caman(iElm[0], $scope.source, function (){
                    this.colorize(newVal, 100);
                    this.render();
                });
            });
        }
    };
})
.directive('stamp', function($interval){
    return {
        restrict: 'A',
        scope: {
            model: '='
        },
        template: '<div style="position:absolute;left:{{model.left}}px;top:{{model.top}}px;"><span class="stamp-label">{{ model.userId }}</span><canvas></canvas></div>',
        replace: true,
        link: function($scope, iElm){

            $scope.width = 80;
            $scope.height = 80;

            $scope.$watch('model.fingerprint.thumbnail', function(newVal){
                Caman(iElm.find('canvas')[0], newVal, function (){
                    $scope.width = this.width;
                    $scope.height = this.height;
                    this.contrast(20);
                    this.colorize($scope.model.color, 100);
                    this.render();
                });
            });
        }
    };
})
.directive('fingerprintThumb', function(){
    return {
        restrict: 'A',
        scope: {
            source: '=',
            thumbWidth: '@',
            thumbHeight: '@'
        },
        template: '<canvas width="{{thumbWidth}}" height="{{thumbHeight}}"></canvas>',
        replace: true,
        link: function($scope, iElm, iAttrs){
            $scope.$watch('source', function(newVal){
                Caman(iElm[0], newVal, function (){
                    this.resize({
                        width: iAttrs.thumbWidth,
                        height: iAttrs.thumbHeight
                    });
                    this.contrast(10);
                    this.render();
                });
            });
        }
    };
});
