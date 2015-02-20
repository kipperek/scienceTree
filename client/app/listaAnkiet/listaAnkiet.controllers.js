'use strict';

angular.module('sciencetreeApp.listaAnkiet')
  .controller('ListaAnkietController',['$scope', '$state',function($scope,$state){

    $scope.ankiety = [
      { id: 1, name: "Badanie 1", wyniki: 234, nowe: 43},
      { id: 2, name: "Socjopaci w społeczeństwie", wyniki: 10, nowe: 5}
    ];

    $scope.addNewQuestionaire = function(){
      $state.go('nowaAnkieta');
    };


    //hideSpinner
    $scope.$emit('hideSpinner');
  }]);
