'use strict';


angular.module('sciencetreeApp.login')
  .directive('disableInput',[ function() {
    return {
      scope: true,
      restrict: 'A',
      link: function(scope, element){
        scope.testLogging = function(){
          return scope.loginFactory.loggingIn;
        };
        scope.$watch(scope.testLogging,function(newValue){
          element.attr('disabled',newValue);
        });
      }
    }
  }]);
