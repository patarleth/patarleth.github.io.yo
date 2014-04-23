'use strict';

angular.module('golfinatorApp')
  .factory('peopleinspace', function ($resource) {
    // Service logic
    // ...

    var peopleInSpaceResource = $resource(
      'http://api.open-notify.org/astros.json',
      {callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var issPosResource = $resource(
      'http://api.open-notify.org/iss-now.json',
      {callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    // Public API here
    return {
      names: function () {
        return peopleInSpaceResource.get({}).$promise;
      },
      issPos: function() {
        return issPosResource.get({}).$promise;
      }
    };
  });
