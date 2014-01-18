'use strict';

angular.module('fingerprintsApp')
  .controller('StampsCreateController', function ($scope) {

        $scope.size = 40;



        $scope.sketch = function(sketch) {
            // Initialize sketch
            sketch.setup = function() {
                sketch.size(680, 360);
                sketch.frameRate(60);
            };

            // Main draw loop
            sketch.draw = function() {
                sketch.background(120);
                sketch.strokeWeight(5);
                sketch.stroke(255);
                sketch.fill(255, 0, 0);
                sketch.ellipse($scope.left, $scope.top, $scope.size, $scope.size);
            };

            $scope.move = function($sketch){
                $scope.left = $sketch.mouseX;
                $scope.top = $sketch.mouseY;
            };
        };
  });
