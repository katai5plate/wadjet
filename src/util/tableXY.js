'use strict';

/** Get an accessor to the table. */
module.exports =
    ({
        label = [''],
        table = [
            [0]
        ]
    } = {}) =>
    ({ x = 0, y = 0 } = {}) =>
    (z => z || '')(label[(r => r ? r[x] : undefined)(table[y])]);