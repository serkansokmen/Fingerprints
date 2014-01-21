'use strict';

angular.module('fingerprintsApp')
.controller('StampFormController', function ($scope, $state, $log, FB_URL, FingerprintsService, $firebase){

    $scope.fingerprints = FingerprintsService.getFingerprints();
    resetNewStamp();

    var stampsRef = new Firebase(FB_URL + '/stamps');
    var auth = new FirebaseSimpleLogin(stampsRef, function(error, user) {
        $scope.user = user;
        $scope.stamps = $firebase(stampsRef);

        var usersRef = new Firebase(FB_URL + '/users');
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
        $state.go('stamps.list');
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
            left: 350,
            top: 160,
            color: '#000000',
            fingerprint: {}
        }
    }
}).
controller('StampsController', function($scope, $timeout, $firebase, FB_URL, FingerprintsService){

    $scope.fingerprints = FingerprintsService.getFingerprints();
    var stampsRef = new Firebase(FB_URL + '/stamps');
    $scope.stamps = $firebase(stampsRef);

    var connectedRef = new Firebase(FB_URL + '/.info/connected');

    $scope.connected = false;
    $scope.showWarning = true;
    connectedRef.on('value', function(snap) {
        $scope.connected = snap.val();
        $scope.showWarning = true;
        $timeout(function(){
            $scope.showWarning = false;
        }, 2000);
    });

});
