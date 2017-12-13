'use strict';

const wadjet = require('../src');

test('is Function', () => expect(wadjet).toBeInstanceOf(Function));
test('Be truthy', () => expect(wadjet()).toBeTruthy());
test('Be truthy', () => {
    const result = wadjet('2007-08-31');
    console.log(JSON.stringify(result));
    expect(result).toBeTruthy()
});