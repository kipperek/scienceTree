'use strict';

angular.module('sciencetreeApp.listaAnkiet', ['ui.router'])
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('app.listaAnkiet', {
        url: '',
        parent: 'app',
        templateUrl: 'app/listaAnkiet/listaAnkiet.html',
        controller: 'ListaAnkietController'
      });
  }]);
