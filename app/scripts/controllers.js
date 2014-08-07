'use strict';

angular.module('fingerprintsApp')
    .controller('StampFormController', [
        '$scope', '$state', '$firebase', '$log', 'FIREBASE_URL', 'FingerprintsService',
        function($scope, $state, $firebase, $log, FIREBASE_URL, FingerprintsService) {

            // Authentication
            var ref = new Firebase(FIREBASE_URL);
            var auth = new FirebaseSimpleLogin(ref, function(error, user) {
                if (error !== null) {
                    console.log('Login error:', error);
                } else if (user !== null) {
                    console.log('User authenticated with Firebase:', user);
                    $scope.user = user;
                    $scope.stamps = $firebase(stampsRef).$asArray();
                } else {
                    console.log('User is logged out');
                }
            });

            $scope.login = function() {
                auth.login('anonymous');
            };
            $scope.logout = function() {
                auth.logout();
            };

            $scope.resetNewStamp = function() {
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
            $scope.addStamp = function() {
                var newStamp = $scope.newStamp;
                newStamp.userId = $scope.user.uid;
                newStamp.createdAt = new Date();
                $scope.stamps.$save(newStamp);
                $state.go('stamps');
                $scope.resetNewStamp();
            };

            $scope.selectFingerprint = function(fp) {
                $scope.newStamp.fingerprint = fp;
            };
            $scope.moveFingerprint = function(event) {
                $scope.newStamp.left = event.offsetX;
                $scope.newStamp.top = event.offsetY;
            };
        }
    ])
    .controller('StampsController', [
        '$scope', '$firebase', 'FIREBASE_URL', 'FingerprintsService',
        function($scope, $firebase, FIREBASE_URL, FingerprintsService) {

            $scope.fingerprints = FingerprintsService.getFingerprints();
            var ref = new Firebase(FIREBASE_URL + '/stamps');
            var sync = $firebase(ref);
            $scope.stamps = sync.$asArray();
        }
    ]);
