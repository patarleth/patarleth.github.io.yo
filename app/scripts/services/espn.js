'use strict';

angular.module('golfinatorApp')
  .factory('espn', function ($resource) {
    //
    // http://api.espn.com/v1/now?apikey=v37fddaw8ge4knf8yqq7nnd9
    var espnResource = $resource(
      'http://api.espn.com/v1/now?apikey=v37fddaw8ge4knf8yqq7nnd9',
      {callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var espnnow = function() {
      return espnResource.get({}).$promise;
    };

    // Public API here
    return {
      feednow: function () {
        return espnnow();
      }
    };

  });
