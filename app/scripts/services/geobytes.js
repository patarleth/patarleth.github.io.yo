'use strict';

angular.module('golfinatorApp')
  .factory('geobytes', function ($resource) {
    //JSONP weather call to forcast.io
    var geoResource = $resource(
      'http://gd.geobytes.com/GetCityDetails?fqcn=:fqcn',
      {fqcn:'@fqcn', callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var geo = function(fqcn) {
      return geoResource.get({fqcn:fqcn}).$promise;
    };

    // Public API here
    return {
      cityDetails: function (fqcn) {
        return geo(fqcn);
      }
    };
  });
