'use strict';

describe('Directive: bookGenres', function () {

  // load the directive's module
  beforeEach(module('prj2MyReadingListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-genres></book-genres>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bookGenres directive');
  }));
});
