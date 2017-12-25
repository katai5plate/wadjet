'use strict';

const strArray = [''];
const numArrayArray = [
    [0]
];

/** Get an accessor to the table. */
export default ({ label = strArray, table = numArrayArray } = {}) =>
({ x = 0, y = 0 } = {}) =>
(z => z || '')(label[(r => r ? r[x] : undefined)(table[y])]);