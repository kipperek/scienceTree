'use strict';

angular.module('sciencetreeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'sciencetreeApp.login',
  'sciencetreeApp.mainApp',
  'sciencetreeApp.listaAnkiet',
  'sciencetreeApp.edycjaAnkiety',
  'sciencetreeApp.edycjaDanychAnkiety',
  'materialDatepicker'
])

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise( function($injector) {
      var $state = $injector.get("$state");
      $state.go("login");
    });
    $locationProvider.html5Mode(true);
  })

  .run(['$rootScope','$state','loginFactory',function($rootScope,$state,loginFactory){
    $rootScope.$on('$stateChangeStart',function(event, toState){
      if(loginFactory.byPass){ return; }

      event.preventDefault();
      loginFactory.isAuthenticated(toState.name);

    });
  }]);
