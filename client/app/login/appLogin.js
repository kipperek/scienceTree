'use strict';

angular.module('sciencetreeApp.login', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      });
  }]);
