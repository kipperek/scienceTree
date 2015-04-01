'use strict';

angular.module('materialDatepicker',[])
  .directive('materialDateinput', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/addons/datepicker/datepicker.html',
      link: function(scope,element){
        console.log(element);
      }
    };
  });
