'use strict';

describe('Service: thesaurus', function () {

  // load the service's module
  beforeEach(module('golfinatorApp'));

  // instantiate service
  var thesaurus;
  beforeEach(inject(function (_thesaurus_) {
    thesaurus = _thesaurus_;
  }));

  it('should do something', function () {
    expect(!!thesaurus).toBe(true);
  });

});
