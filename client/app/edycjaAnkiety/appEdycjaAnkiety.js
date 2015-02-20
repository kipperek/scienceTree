'use strict';


angular.module('sciencetreeApp.edycjaAnkiety', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('nowaAnkieta', {
        url: '/ankieta',
        templateUrl: 'app/edycjaAnkiety/edycjaAnkiety.html',
        controller: 'EdycjaAnkietyController'
      })
      .state('edycjaAnkiety', {
        url: '/ankieta/:id',
        templateUrl: 'app/edycjaAnkiety/edycjaAnkiety.html',
        controller: 'EdycjaAnkietyController'
      });
    }]);

