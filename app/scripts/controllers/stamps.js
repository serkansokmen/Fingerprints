'use strict';

angular.module('fingerprintsApp')
    .controller('StampsCreateController', function ($scope, $log, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();
        $scope.newStamp = {
            size: 200,
            left: 400,
            top: 200,
            color: '#cccccc',
            fingerprint: $scope.fingerprints[0]
        }

        $scope.selectFingerprint = function(fp) {
            $scope.newStamp.fingerprint = fp;
        };


        $scope.resetColor = function() {
          $scope.newStamp.color = '#cccccc';
        };
        $scope.resetColor();

        // Processing Sketch
        $scope.sketch = function(sketch) {
            var fpImage = new sketch.PImage();

            // Initialize sketch
            sketch.setup = function() {
                sketch.frameRate(60);
            };

            $scope.$watch('newStamp.fingerprint', function(newValue, oldValue) {
                sketch.fpImage = sketch.loadImage(newValue.url);
            });

            // Main draw loop
            sketch.draw = function() {
                sketch.background(255);
                sketch.fill($scope.newStamp.color);
                sketch.image(sketch.fpImage, $scope.newStamp.left - sketch.fpImage.width/2, $scope.newStamp.top - sketch.fpImage.height/2);
                // sketch.ellipse($scope.newStamp.left, $scope.newStamp.top, $scope.newStamp.size, $scope.newStamp.size);
            };

            $scope.move = function($sketch){
                $scope.newStamp.left = $sketch.mouseX;
                $scope.newStamp.top = $sketch.mouseY;
            };
        };
    }).
    controller('StampsListController', function($scope) {
        $scope.stampsList = [];
    });
