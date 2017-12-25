'use strict';

/** Max value. */
const MAX = Number.MAX_VALUE;

/**
 * Correspondence table of life-base factor corresponding to the month and
 * day coefficient threshold.
 */
const table = [
    [{ t: 9, v: 10 }, { t: 13, v: 8 }, { t: MAX, v: 6 }],
    [{ t: 3, v: 6 }, { t: 5, v: 5 }, { t: 14, v: 3 }, { t: MAX, v: 1 }],
    [{ t: 10, v: 1 }, { t: MAX, v: 2 }],
    [{ t: 9, v: 2 }, { t: 13, v: 10 }, { t: MAX, v: 5 }],
    [{ t: 5, v: 5 }, { t: 14, v: 7 }, { t: MAX, v: 3 }],
    [{ t: 10, v: 3 }, { t: MAX, v: 4 }],
    [{ t: 9, v: 4 }, { t: 13, v: 2 }, { t: MAX, v: 6 }],
    [{ t: 3, v: 6 }, { t: 5, v: 5 }, { t: 14, v: 9 }, { t: MAX, v: 7 }],
    [{ t: 10, v: 7 }, { t: MAX, v: 8 }],
    [{ t: 9, v: 8 }, { t: 13, v: 4 }, { t: MAX, v: 5 }],
    [{ t: 5, v: 5 }, { t: 14, v: 1 }, { t: MAX, v: 9 }],
    [{ t: 10, v: 9 }, { t: MAX, v: 10 }],
];

/** Get life-base factor from month, day and coefficient. */
export default (month = 1, dcoef = 0) =>
((r, d) => !r ? Number.NaN : r.find(v => d < v.t).v)(
    table[month - 1], dcoef);