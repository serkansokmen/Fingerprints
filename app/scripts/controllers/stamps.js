'use strict';

angular.module('fingerprintsApp')
    .controller('StampFormController', function ($scope, $log, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();
        $scope.newStamp = {
            left: 200,
            top: 200,
            color: '#0000cc',
            fingerprint: $scope.fingerprints[0]
        }

        $scope.selectFingerprint = function(fp) {
            $scope.newStamp.fingerprint = fp;
        };
        $scope.moveFingerprint = function(event) {
            $scope.newStamp.left = event.offsetX;
            $scope.newStamp.top = event.offsetY;
        };
    }).
    controller('StampsController', function($scope, FingerprintsService) {

        $scope.fingerprints = FingerprintsService.getFingerprints();

    });
