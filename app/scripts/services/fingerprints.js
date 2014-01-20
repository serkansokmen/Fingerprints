'use strict';

angular.module('fingerprintsApp')
    .service('FingerprintsService', function() {

        var fingerprints = [{
            id: 0,
            thumbnail: 'media/fingerprints/001_80x80_cropped.png',
            full: 'media/fingerprints/001.png',
            medium: 'media/fingerprints/001_medium.png',
            large: 'media/fingerprints/001_large.png'
        }, {
            id: 1,
            thumbnail: 'media/fingerprints/002_80x80_cropped.png',
            full: 'media/fingerprints/002.png',
            medium: 'media/fingerprints/002_medium.png',
            large: 'media/fingerprints/002_large.png'
        }, {
            id: 2,
            thumbnail: 'media/fingerprints/003_80x80_cropped.png',
            full: 'media/fingerprints/003.png',
            medium: 'media/fingerprints/003_medium.png',
            large: 'media/fingerprints/003_large.png'
        }, {
            id: 3,
            thumbnail: 'media/fingerprints/004_80x80_cropped.png',
            full: 'media/fingerprints/004.png',
            medium: 'media/fingerprints/004_medium.png',
            large: 'media/fingerprints/004_large.png'
        }, {
            id: 4,
            thumbnail: 'media/fingerprints/005_80x80_cropped.png',
            full: 'media/fingerprints/005.png',
            medium: 'media/fingerprints/005_medium.png',
            large: 'media/fingerprints/005_large.png'
        }, {
            id: 5,
            thumbnail: 'media/fingerprints/006_80x80_cropped.png',
            full: 'media/fingerprints/006.png',
            medium: 'media/fingerprints/006_medium.png',
            large: 'media/fingerprints/006_large.png'
        }, {
            id: 6,
            thumbnail: 'media/fingerprints/007_80x80_cropped.png',
            full: 'media/fingerprints/007.png',
            medium: 'media/fingerprints/007_medium.png',
            large: 'media/fingerprints/007_large.png'
        }, {
            id: 7,
            thumbnail: 'media/fingerprints/008_80x80_cropped.png',
            full: 'media/fingerprints/008.png',
            medium: 'media/fingerprints/008_medium.png',
            large: 'media/fingerprints/008_large.png'
        }, {
            id: 8,
            thumbnail: 'media/fingerprints/009_80x80_cropped.png',
            full: 'media/fingerprints/009.png',
            medium: 'media/fingerprints/009_medium.png',
            large: 'media/fingerprints/009_large.png'
        }];

        return {
            getFingerprints: function () {
                return fingerprints;
            }
        }
    });
