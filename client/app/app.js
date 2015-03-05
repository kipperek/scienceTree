'use strict';

angular.module('sciencetreeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'sciencetreeApp.login',
  'sciencetreeApp.mainApp',
  'sciencetreeApp.listaAnkiet',
  'sciencetreeApp.edycjaAnkiety'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/tree');

    $locationProvider.html5Mode(true);
  })
  .controller('mainController',['$scope','$rootScope',function($scope,$rootScope){
    $rootScope.spinnerHidden = false;
    $rootScope.menuActive = false;

    var hideSpinner = function(){
      $rootScope.spinnerHidden = true;
    }
    var showSpinner = function(){
      $rootScope.spinnerHidden = false;
    }

    $rootScope.$on('showSpinner', showSpinner);
    $rootScope.$on('hideSpinner', hideSpinner);

    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.spinnerHidden = false;
    });
  }]);
