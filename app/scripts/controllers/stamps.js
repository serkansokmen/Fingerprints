'use strict';

angular.module('fingerprintsApp')
.controller('StampFormController', function ($scope, $state, $log, FIREBASE_URL, FingerprintsService, $firebase){

    $scope.resetNewStamp = function(){
        $scope.newStamp = {
            left: 350,
            top: 160,
            color: '#000000',
            fingerprint: {}
        };
    };

    $scope.fingerprints = FingerprintsService.getFingerprints();
    $scope.resetNewStamp();

    var stampsRef = new Firebase(FIREBASE_URL + '/stamps');
    var auth = new FirebaseSimpleLogin(stampsRef, function(error, user) {
        $scope.user = user;
        $scope.stamps = $firebase(stampsRef);
    });

    $scope.login = function(){
        auth.login('facebook', {
            rememberMe: true,
            scope: 'email'
        });
    };
    $scope.logout = function(){
        auth.logout();
    };

    $scope.addStamp = function(){
        var newStamp = $scope.newStamp;
        newStamp.userId = $scope.user.uid;
        newStamp.createdAt = new Date();
        $scope.stamps.$add(newStamp);
        $state.go('stamps');
        $scope.resetNewStamp();
    };

    $scope.selectFingerprint = function(fp){
        $scope.newStamp.fingerprint = fp;
    };
    $scope.moveFingerprint = function(event){
        $scope.newStamp.left = event.offsetX;
        $scope.newStamp.top = event.offsetY;
    };
})
.controller('StampsController', function($scope, $firebase, FIREBASE_URL, FingerprintsService){

    $scope.fingerprints = FingerprintsService.getFingerprints();
    var stampsRef = new Firebase(FIREBASE_URL + '/stamps');
    $scope.stamps = $firebase(stampsRef);
});
