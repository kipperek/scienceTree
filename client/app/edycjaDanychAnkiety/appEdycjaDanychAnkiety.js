'use strict';

angular.module('sciencetreeApp.edycjaDanychAnkiety', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('nowaAnkietaDane', {
        url: '/dane',
        parent: 'app',
        templateUrl: 'app/edycjaDanychAnkiety/edycjaDanychAnkiety.html',
        controller: 'EdycjaDanychAnkietyController'
      })
      .state('edycjaDanychAnkiety', {
        url: '/dane/:id',
        parent: 'app',
        templateUrl: 'app/edycjaDanychAnkiety/edycjaDanychAnkiety.html',
        controller: 'EdycjaDanychAnkietyController'
      });
  }]);
