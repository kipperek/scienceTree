'use strict';

angular.module('sciencetreeApp.login')
  .controller('LoginController',['$scope','loginFactory',function($scope,loginFactory){
    $scope.loginFactory = loginFactory;
    $scope.errorMsg = "Oba pola są wymagane";

    $scope.logIn = function(){
      $scope.user.$setValidity('credentials', true);
      $scope.user.pass.$setDirty();
      $scope.user.login.$setDirty();
      if(!$scope.user.$error.required && !loginFactory.loggingIn) {
        loginFactory.logIn($scope.user.login.$viewValue, $scope.user.pass.$viewValue, $scope.user);
      }
    };
    $scope.register = function(){
      loginFactory.register();
    };


    $scope.$emit('hideSpinner');
  }]);
