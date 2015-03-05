'use strict';

angular.module('sciencetreeApp.login')
  .controller('LoginController',['$scope','$rootScope',function($scope,$rootScope){

    $scope.$emit('hideSpinner');
  }]);
