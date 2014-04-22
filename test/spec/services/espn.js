'use strict';

describe('Service: espn', function () {

  // load the service's module
  beforeEach(module('golfinatorApp'));

  // instantiate service
  var espn;
  beforeEach(inject(function (_espn_) {
    espn = _espn_;
  }));

  it('should do something', function () {
    expect(!!espn).toBe(true);
  });

});
