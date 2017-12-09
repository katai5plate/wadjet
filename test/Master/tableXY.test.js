'use strict';

const tableXY = require('../../src/Master/tableXY');

test(
    'Whether is `tableXY` function object.',
    () => expect(tableXY).toBeInstanceOf(Function));
test(
    'Whether is result of `tableXY()` function object.',
    () => expect(tableXY()).toBeInstanceOf(Function));