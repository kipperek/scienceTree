'use strict';

angular.module('sciencetreeApp.login')
  .factory('loginFactory',['$http','$state','$rootScope',function($http, $state, $rootScope){
    var loginFactoryObject = {
      user: null,
      byPass: false,
      resolvingLogin: false,
      loggingIn: false,
      logOut: function(){
        $rootScope.$emit('showSpinner');
        $http.get('/api/user/logout')
          .success(function(data){
            loginFactoryObject.user = null;
            $state.go('login');
          });
          //.error(function(){
          //  //TODO
          //});
      },
      logIn: function(login,haslo, userModel){
        loginFactoryObject.loggingIn = true;
        $http.post('/api/user/login',{username: login, password: haslo })
          .success(function(data){
            loginFactoryObject.loggingIn = false;
            userModel.$setValidity('credentials', true);
            loginFactoryObject.user = data.user;
            $state.go('app.listaAnkiet');
          })
          .error(function(){
            loginFactoryObject.loggingIn = false;
            userModel.$setValidity('credentials', false);
          });
      },
      isAuthenticated: function(toState){
        if(!loginFactoryObject.resolvingLogin) {
          loginFactoryObject.resolvingLogin = true;
          $http.get('/api/user')
            .success(function (data) {
              loginFactoryObject.byPass = true;
              loginFactoryObject.user = data.user;
              if(!toState || toState === 'login') {
                $state.go('app.listaAnkiet');
              }else{
                $state.go(toState);
              }
            })
            .error(function () {
              loginFactoryObject.byPass = true;
              $state.go('login');
            });
        }
      },
      register: function(){
        $http.post('/api/user/register', {username: 'kacper2', password: '1234' })
          .success(function(data){
            console.log(data);
            //loginFactoryObject.user = data.user;
            //$state.go('app.listaAnkiet');
          })
          .error(function(){
            //TODO
          });
      }
    };
    return loginFactoryObject;
  }]);
