'use strict';

angular.module('sciencetreeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'sciencetreeApp.listaAnkiet'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
