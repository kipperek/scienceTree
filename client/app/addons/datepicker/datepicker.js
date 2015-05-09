'use strict';

var datepickerController = function($scope){
  var picker = angular.element('.datepicker-main');
  var input = angular.element('input[type=text]');
  var paperInput = angular.element('paper-input-decorator');
  var mask = angular.element('.datepicker-mask');

  var getNumberOfWeeks = function(monthsDays,month,firstDay){
    firstDay = firstDay || 7;
    console.log(Math.ceil((monthsDays[month] + firstDay) / 7));
    return Math.ceil((monthsDays[month] + firstDay) / 7);
  };

  $scope.today = new Date();
  $scope.datepickerDate = new Date();
  $scope.weekDays = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Ni'];
  $scope.weekFullDays = ['Niedziela','Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  $scope.months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec','Sierpień','Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  $scope.monthsDays = [31,$scope.datepickerDate.getFullYear() % 4 == 0 ? 29 : 28, 31, 30,31,30,31,31,30,31,30,31];
  $scope.firstMonthDay = new Date($scope.datepickerDate.getFullYear(), $scope.datepickerDate.getMonth(), 1);
  $scope.firstDayWeekDay = $scope.firstMonthDay.getDay();
  $scope.weeksInMonth = getNumberOfWeeks($scope.monthsDays,$scope.datepickerDate.getMonth(),$scope.firstDayWeekDay);

  $scope.showDatepicker = function(e){
    e.preventDefault();
    picker.show();
    mask.show();
  };

  $scope.hideDatepicker = function(){
    picker.hide();
    mask.hide();
  };

  $scope.getNumber = function(num) {
    return new Array(num);
  }

  $scope.getMonthDay = function(i, j, maxDays){
    var day = (j - $scope.firstDayWeekDay +2) + 7 *  i;
    return day > 0 && day <= maxDays ? day : '';
  };

  $scope.updateMonth = function(x){
    var currentMonth = $scope.datepickerDate.getMonth();
    $scope.datepickerDate.setMonth(currentMonth + x);
    $scope.firstMonthDay = new Date($scope.datepickerDate.getFullYear(), $scope.datepickerDate.getMonth(), 1);
    $scope.firstDayWeekDay = $scope.firstMonthDay.getDay() || 7;
    $scope.weeksInMonth = getNumberOfWeeks($scope.monthsDays,$scope.datepickerDate.getMonth(),$scope.firstDayWeekDay);
  };

};

angular.module('materialDatepicker',[])
  .directive('materialDateinput', function(){
    return {
      restrict: 'E',
      scope: true,
      controller: datepickerController,
      templateUrl: 'app/addons/datepicker/datepicker.html',
      link: function(scope,element){

      }
    };
  })
  .filter('short', function(){
    return function(input){
      input = input || '';
      var out = input.toUpperCase().substring(0,3);

      return out;
    }
  });
