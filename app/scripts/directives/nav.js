'use strict';

angular.module('golfinatorApp')
  .directive('nav', function () {
    return {
      templateUrl: 'views/nav.html',
      transclude: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if( attrs.menuId ) {
          scope.menuId = attrs.menuId;
        }
      }
    };
  });
