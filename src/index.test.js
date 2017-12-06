'use strict';

const wadjet = require('./');

test('is Function', () => expect(wadjet).toBeInstanceOf(Function));
test('truthy', () => expect(wadjet()).toBeTruthy());