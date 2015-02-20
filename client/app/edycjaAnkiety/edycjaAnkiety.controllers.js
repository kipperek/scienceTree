'use strict';

angular.module('sciencetreeApp.edycjaAnkiety')
  .controller('EdycjaAnkietyController',['$scope',function($scope){

    $scope.bloki = [];

    $scope.dodajBlok = function(){
      var id = $scope.bloki.length > 0 ? $scope.bloki[$scope.bloki.length-1].id + 1 : 1;

      $scope.bloki.push({ id: id, warunki: [] });
    };


    //hideSpinner
    $scope.$emit('hideSpinner');
}]);
