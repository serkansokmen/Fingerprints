'use strict';

angular.module('fingerprintsApp')
    .controller('StampFormController', function ($scope, $log, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();
        $scope.newStamp = {
            left: 400,
            top: 200,
            color: '#000000',
            fingerprint: $scope.fingerprints[0]
        }

        $scope.selectFingerprint = function(fp) {
            $scope.newStamp.fingerprint = fp;
        };

        $scope.resetColor = function() {
            $scope.newStamp.color = '#ff0000';
        };
        $scope.resetColor();

        // Processing Sketch
        $scope.sketch = function(sketch) {
            var fpImage = new sketch.PImage();

            // Initialize sketch
            sketch.setup = function() {
                sketch.frameRate(30);
                $scope.$watch('newStamp.fingerprint', function(newValue, oldValue) {
                    sketch.fpImage = sketch.loadImage(newValue.thumbnail);
                });
                $scope.$watch('newStamp.color', function(newValue, oldValue) {
                    var hexStr = newValue.split('#')[1],
                        octa = +('0xff' + hexStr),
                        color = sketch.color(octa);

                    sketch.fillColor = color;

                    sketch.fpImage.loadPixels();
                    for (var i = 0; i < (sketch.fpImage.width*sketch.fpImage.height/2)-sketch.fpImage.width/2; i++) {
                        sketch.fpImage.pixels[i] = color;
                    }
                    sketch.fpImage.updatePixels();
                });

                $scope.newStamp.left = sketch.width/2;
                $scope.newStamp.top = sketch.height/2;
            };

            // Main draw loop
            sketch.draw = function() {

                sketch.background(255);
                sketch.noStroke();
                sketch.fill(sketch.fillColor);
                // sketch.rect($scope.newStamp.left - sketch.fpImage.width/2, $scope.newStamp.top - sketch.fpImage.height/2, sketch.fpImage.width, sketch.fpImage.height);
                sketch.image(sketch.fpImage, $scope.newStamp.left - sketch.fpImage.width/2, $scope.newStamp.top - sketch.fpImage.height/2);
            };

            $scope.move = function($sketch){
                $scope.newStamp.left = $sketch.mouseX;
                $scope.newStamp.top = $sketch.mouseY;
            };

            function d2h(d) {return d.toString(16);}
            function h2d(h) {return parseInt(h,16);}
        };
    }).
    controller('StampsController', function($scope, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();

        // Processing Sketch
        $scope.sketch = function(sketch) {
            /*
            stamp.image = new sketch.PImage();

            // Initialize sketch
            sketch.setup = function() {
                sketch.frameRate(60);
            };

            // Main draw loop
            sketch.draw = function() {
                sketch.background(255);
                sketch.image(sketch.fpImage, stamp.left - sketch.fpImage.width/2, stamp.top - sketch.fpImage.height/2);
            };
            */
        };
    }).
    controller('StampController', function($scope, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();
        $scope.stamp = {
            left: 400,
            top: 200,
            color: '#000000',
            fingerprint: $scope.fingerprints[0]
        };
    });
