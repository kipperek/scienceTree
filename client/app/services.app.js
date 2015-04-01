'use strict';

angular.module('sciencetreeApp')
  .factory('cookiesFactory',['$http', function($http){
    var cookiesObject = {
      shown: false,
      check: function(){
        $http.post('/api/user/checkCookies')
          .success(function(data){
            cookiesObject.shown = data.policy ? false : true;
          })
          .error(function(){
            cookiesObject.shown = true;
          });
      },
      sendYes: function(){
        cookiesObject.shown = false;
        $http.post('/api/user/hideCookies')
          .error(function(){
            cookiesObject.shown = true;
          });
      }
    };

    return cookiesObject;
  }]);
