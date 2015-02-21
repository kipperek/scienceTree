'use strict';

angular.module('sciencetreeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'sciencetreeApp.listaAnkiet',
  'sciencetreeApp.edycjaAnkiety'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .controller('mainController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.menuActive = false;
    $rootScope.spinnerHidden = false;

    var hideSpinner = function(){
      $rootScope.spinnerHidden = true;
    }
    var showSpinner = function(){
      $rootScope.spinnerHidden = false;
    }

    $rootScope.$on('showSpinner', showSpinner);
    $rootScope.$on('hideSpinner', hideSpinner);

    $rootScope.$on('$stateChangeStart', function(){
      $scope.menuActive = false;
      $rootScope.spinnerHidden = false;
    });

    $scope.toggleMenu = function(){
      $scope.menuActive = !$scope.menuActive;
    };
  }]);
