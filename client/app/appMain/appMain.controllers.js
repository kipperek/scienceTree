'use strict';

angular.module('sciencetreeApp.mainApp')
  .controller('AppMainController',['$scope','$rootScope','loginFactory',function($scope,$rootScope,loginFactory){

    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.menuActive = false;
    });

    $scope.toggleMenu = function(){
      $rootScope.menuActive = !$scope.menuActive;
    };

    $scope.logOut = function(){
      loginFactory.logOut();
    };
  }]);
