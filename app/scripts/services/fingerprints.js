'use strict';

angular.module('fingerprintsApp')
    .service('FingerprintsService', function() {

        var fingerprints = [{
            id: 0,
            url: 'media/fingerprints/001_80x80_cropped.png'
        }, {
            id: 1,
            url: 'media/fingerprints/002_80x80_cropped.png'
        }, {
            id: 2,
            url: 'media/fingerprints/003_80x80_cropped.png'
        }, {
            id: 3,
            url: 'media/fingerprints/004_80x80_cropped.png'
        }, {
            id: 4,
            url: 'media/fingerprints/005_80x80_cropped.png'
        }, {
            id: 5,
            url: 'media/fingerprints/006_80x80_cropped.png'
        }, {
            id: 6,
            url: 'media/fingerprints/007_80x80_cropped.png'
        }, {
            id: 7,
            url: 'media/fingerprints/008_80x80_cropped.png'
        }, {
            id: 8,
            url: 'media/fingerprints/009_80x80_cropped.png'
        }];

        return {
            getFingerprints: function () {
                return fingerprints;
            }
        }
    });
