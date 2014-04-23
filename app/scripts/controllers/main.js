'use strict';

angular.module('golfinatorApp')
  .controller('MainCtrl', function ($sce,$scope,weather,geobytes,espn,thesaurus,peopleinspace) {
    var fetchWord = function(word, thesaurusResult) {
      var result = word;
      if( thesaurusResult.noun && thesaurusResult.noun.syn) {
        result = thesaurusResult.noun.syn[0];
        console.log( 'thes noun syn ' + result);
      }
      return result;
    };

    var mashupWithThesaurus = function(sentance) {
      var parts = sentance.split(/[\s,\.]+/);
      console.log( 'parts ' + parts );
      var resultBuf = [];
      var total = parts.length;
      for( var index = 0; index < parts.length; index++ ) {
        var i = 0+index;
        var word = parts[i];
        thesaurus.words(word).then(
          function (thesaurusResult) {
            resultBuf[i] = fetchWord(word, thesaurusResult);
            total--;
            console.log('total ' + total);
            if( total <= 1 ) {
              $scope.mashup = resultBuf.join(' ');
              console.log('mashup ' + $scope.mashup);
              console.log( 'resultBuf ' + resultBuf);
            }
          },
          function (err) {
            resultBuf[i] = word;
            total--;
            console.log('total(err) ' + total);
            if( total <= 1 ) {
              $scope.mashup = resultBuf.join(' ');
              console.log('mashup ' + $scope.mashup);
              console.log( 'resultBuf ' + resultBuf);
            }
          });
      }
    };

    peopleinspace.names().then(
        function(result) {
            $scope.peopleinspace = result;
          },
        function(spaceErr) {console.err(spaceErr);}
    );

    peopleinspace.issPos().then(
        function(result) {
          if( result.message === 'success' ) {
            $scope.iss_position = result.iss_position;
            weather.forcast(result.iss_position.longitude, result.iss_position.latitude).then(
              function(result) {
                $scope.iss_weather_forcast = result;
              },
              function(weatherErr) {console.err(weatherErr); }
            );
            $scope.iss_position_timestamp = result.timestamp;
          }
        },
      function(spaceErr) {console.err(spaceErr);}
    );

    geobytes.cityDetails('Bristol, CT, United States').then(function(geo) {
      $scope.geo = geo;
      weather.forcast(geo.geobyteslongitude, geo.geobyteslatitude).then(
        function(result) {
          $scope.forcast = result;
          //mashupWithThesaurus(result.daily.summary);
        },
        function(weatherErr) {console.err(weatherErr); }
      );
      espn.feednow().then(
        function(result) {
          $scope.feednow = result;
        },
        function(err) {
          console.log(err);
        }
      );
    }, function(err) { console.err(err); });

    $scope.trust = function(url) {
      return $sce.trustAsResourceUrl(url);
    };
    $scope.issGoogleMapsUrl = function(latitude,longitude) {
      var url = 'https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&hl=es&z=5&output=embed';
      return $scope.trust(url);
    };
  });
