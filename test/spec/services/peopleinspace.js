'use strict';

describe('Service: peopleinspace', function () {

  // load the service's module
  beforeEach(module('golfinatorApp'));

  // instantiate service
  var peopleinspace;
  beforeEach(inject(function (_peopleinspace_) {
    peopleinspace = _peopleinspace_;
  }));

  it('should do something', function () {
    expect(!!peopleinspace).toBe(true);
  });

});
