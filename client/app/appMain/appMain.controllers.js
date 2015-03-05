'use strict';

angular.module('sciencetreeApp.mainApp')
  .controller('AppMainController',['$scope','$rootScope',function($scope,$rootScope){

    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.menuActive = false;
    });

    $scope.toggleMenu = function(){
      $rootScope.menuActive = !$scope.menuActive;
    };
  }]);
