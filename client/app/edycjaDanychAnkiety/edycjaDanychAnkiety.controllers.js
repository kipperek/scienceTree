'use strict';

angular.module('sciencetreeApp.edycjaDanychAnkiety')
  .controller('EdycjaDanychAnkietyController',['$scope',function($scope){

    //hideSpinner
    $scope.$emit('hideSpinner');
}]);
