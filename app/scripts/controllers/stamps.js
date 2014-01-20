'use strict';

angular.module('fingerprintsApp')
.controller('StampFormController', function ($scope, $log, FB_URL, FingerprintsService, $firebase){

    $scope.fingerprints = FingerprintsService.getFingerprints();
    resetNewStamp();

    var stampsRef = new Firebase(FB_URL + '/stamps');
    $scope.stamps = $firebase(stampsRef);

    $scope.addStamp = function(){
        var newStamp = $scope.newStamp;
        $scope.stamps.$add(newStamp);
        resetNewStamp();
    }

    $scope.selectFingerprint = function(fp){
        $scope.newStamp.fingerprint = fp;
    };
    $scope.moveFingerprint = function(event){
        $scope.newStamp.left = event.offsetX;
        $scope.newStamp.top = event.offsetY;
    };

    function resetNewStamp(){
        $scope.newStamp = {
            left: 200,
            top: 200,
            color: '#000000',
            fingerprint: $scope.fingerprints[0]
        }
    }
}).
controller('StampsController', function($scope, $firebase, FB_URL, FingerprintsService){

    $scope.fingerprints = FingerprintsService.getFingerprints();
    var stampsRef = new Firebase(FB_URL + '/stamps');
    $scope.stamps = $firebase(stampsRef);

});
