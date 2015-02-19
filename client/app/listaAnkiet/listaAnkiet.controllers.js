'use strict';

angular.module('sciencetreeApp.listaAnkiet')
  .controller('ListaAnkietController',['$scope',function($scope){

    $scope.ankiety = [
      { id: 1, name: "Badanie 1"}
    ];

  }]);
