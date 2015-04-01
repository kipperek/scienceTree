'use strict';

angular.module('sciencetreeApp')
  .controller('mainController',['$scope','$rootScope','$state','cookiesFactory',function($scope,$rootScope,$state,cookiesFactory){
    $rootScope.spinnerHidden = false;
    $rootScope.menuActive = false;
    $rootScope.cookiesFactory = cookiesFactory;
    cookiesFactory.check();

    var hideSpinner = function(){
      $rootScope.spinnerHidden = true;
    };
    var showSpinner = function(){
      $rootScope.spinnerHidden = false;
    };

    $rootScope.$on('showSpinner', showSpinner);
    $rootScope.$on('hideSpinner', hideSpinner);

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if(error.unAuthorized) {
        $state.go('login');
        if($state.current.name === 'login') { $scope.$emit('hideSpinner'); }
      }
      else if(error.authorized){
        $state.go('app.listaAnkiet');
        if($state.current.name === 'app.listaAnkiet') { $scope.$emit('hideSpinner'); }
      }
    });

    $rootScope.$on('$stateChangeStart', function(){
      $rootScope.spinnerHidden = false;
    });

    $rootScope.hideCookies = function(){
      cookiesFactory.sendYes();
    };

  }]);

