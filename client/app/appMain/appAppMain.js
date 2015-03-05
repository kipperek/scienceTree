'use strict';

angular.module('sciencetreeApp.mainApp', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        url: '/tree',
        templateUrl: 'app/appMain/appMain.html',
        controller: 'AppMainController'
      });
  }]);
