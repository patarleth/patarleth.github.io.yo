'use strict';

angular.module('golfinatorApp')
  .factory('thesaurus', function ($resource) {
    //JSONP weather call to forcast.io
    var thesaurusResource = $resource(
      'http://words.bighugelabs.com/api/2/f53932a6c17445e7577b336837569f05/:word/json',
      {word:'@word',callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var thesaurus = function(word) {
      return thesaurusResource.get({word:word}).$promise;
    };

    // Public API here
    return {
      words: function (word) {
        return thesaurus(word);
      }
    };
  });
