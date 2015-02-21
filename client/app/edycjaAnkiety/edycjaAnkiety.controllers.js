'use strict';

angular.module('sciencetreeApp.edycjaAnkiety')
  .controller('EdycjaAnkietyController',['$scope',function($scope){

    $scope.bloki = [];
    $scope.activeBlok = null;

    $scope.aktywujBlok = function(id){
      if($scope.activeBlok != id)
        $scope.activeBlok = id;
      else
        $scope.activeBlok = null;
    };

    $scope.blokAktywny = function(id){
      return id === $scope.activeBlok ? true : false;
    };

    $scope.dodajBlok = function(){
      var id = $scope.bloki.length > 0 ? $scope.bloki[$scope.bloki.length-1].id + 1 : 1;

      $scope.bloki.push({ id: id, warunki: [] });
    };


    //hideSpinner
    $scope.$emit('hideSpinner');
}]);
