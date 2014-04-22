'use strict';

describe('Service: geobytes', function () {

  // load the service's module
  beforeEach(module('golfinatorApp'));

  // instantiate service
  var geobytes;
  beforeEach(inject(function (_geobytes_) {
    geobytes = _geobytes_;
  }));

  it('should do something', function () {
    expect(!!geobytes).toBe(true);
  });

});
