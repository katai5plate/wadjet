'use strict';

import wadjet from '../dist';

test('is Object', () => expect(wadjet).toBeInstanceOf(Object));
test('is Included APIs', () => {
    expect(wadjet.affinity).toBeInstanceOf(Function);
    expect(wadjet.calc).toBeInstanceOf(Function);
    expect(wadjet.comparator).toBeInstanceOf(Function);
    expect(wadjet.detail).toBeInstanceOf(Function);
    expect(wadjet.personality).toBeInstanceOf(Function);
    expect(wadjet.types).toBeInstanceOf(Array);
});