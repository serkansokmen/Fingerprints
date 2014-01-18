angular.module('fingerprintsApp').
    directive('processing', function(){
      return {
          scope: true,
          link: function($scope, iElm, iAttrs, controller) {
            $scope.$sketch = new Processing(iElm[0], $scope[iAttrs.processing]);
          }
      };
  });
