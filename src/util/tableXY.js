'use strict';

/**
 * Get an accessor to the table.
 * @param {string[]} label Label.
 * @param {number[][]} table Table.
 */
const tableXY =
    (label, table) =>
    ({ x = 0, y = 0 } = {}) =>
    (z => z || '')(label[(r => r ? r[x] : undefined)(table[y])]);

export default tableXY;