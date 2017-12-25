'use strict';

import wadjet from './../dist';

test('is Object', () => expect(wadjet).toBeInstanceOf(Object));
test('is Included APIs', () => {
    expect(wadjet.calc).toBeInstanceOf(Function);
    expect(wadjet.detail).toBeInstanceOf(Function);
});