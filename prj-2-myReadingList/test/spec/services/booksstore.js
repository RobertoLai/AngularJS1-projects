'use strict';

describe('Service: booksstore', function () {

  // load the service's module
  beforeEach(module('prj2MyReadingListApp'));

  // instantiate service
  var booksstore;
  beforeEach(inject(function (_booksstore_) {
    booksstore = _booksstore_;
  }));

  it('should do something', function () {
    expect(!!booksstore).toBe(true);
  });

});
