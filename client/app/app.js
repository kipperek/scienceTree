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
  }).run(['$rootScope', function($rootScope){

    $rootScope.spinnerHidden = false;

    var hideSpinner = function(){
      $rootScope.spinnerHidden = true;
    }
    var showSpinner = function(){
      $rootScope.spinnerHidden = false;
    }

    $rootScope.$on('showSpinner', showSpinner);
    $rootScope.$on('hideSpinner', hideSpinner);
    $rootScope.$on('$stateChangeStart', showSpinner);
  }])
  .controller('mainController',['$scope',function($scope){
    $scope.menuActive = false;

    $scope.toggleMenu = function(){
      $scope.menuActive = !$scope.menuActive;
    };
  }]);
