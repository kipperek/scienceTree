'use strict';

angular.module('sciencetreeApp.listaAnkiet', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('listaAnkiet', {
        url: '/',
        templateUrl: 'app/listaAnkiet/listaAnkiet.html',
        controller: 'ListaAnkietController'
      });
  }]);
