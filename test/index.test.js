'use strict';

const wadjet = require('../src');

test('is Function', () => expect(wadjet).toBeInstanceOf(Function));
test('Be truthy', () => expect(wadjet()).toBeTruthy());