'use strict';

angular.module('golfinatorApp')
  .factory('weather', function ($resource) {
    //JSONP weather call to forcast.io
    var weatherResource = $resource(
      'https://api.forecast.io/forecast/2f3de807d75b397cefd75771b50562d4/:long,:lat',
      {long:'@long', lat:'@lat',callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var weatherForcast = function(lat, long) {
      return weatherResource.get({long:long,lat:lat}).$promise;
    };

    // Public API here
    return {
      forcast: function (lat,long) {
        //default espn plaza
        if(!long) { long = '41.650228'; }
        if(!lat) { lat = '-72.903514';}
        return weatherForcast(lat,long);
      }
    };
  });
