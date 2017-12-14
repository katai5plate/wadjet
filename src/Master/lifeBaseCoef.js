'use strict';

/** Not a Number. */
const N = Number.NaN;

const table = [
    [{ t: 9, v: 10 }, { t: 13, v: 8 }, { t: N, v: 6 }],
    [{ t: 3, v: 6 }, { t: 5, v: 5 }, { t: 14, v: 3 }, { t: N, v: 1 }],
    [{ t: 10, v: 1 }, { t: N, v: 2 }],
    [{ t: 9, v: 2 }, { t: 13, v: 10 }, { t: N, v: 5 }],
    [{ t: 5, v: 5 }, { t: 14, v: 7 }, { t: N, v: 3 }],
    [{ t: 10, v: 3 }, { t: N, v: 4 }],
    [{ t: 9, v: 4 }, { t: 13, v: 2 }, { t: N, v: 6 }],
    [{ t: 3, v: 6 }, { t: 5, v: 5 }, { t: 14, v: 9 }, { t: N, v: 7 }],
    [{ t: 10, v: 7 }, { t: N, v: 8 }],
    [{ t: 9, v: 8 }, { t: 13, v: 4 }, { t: N, v: 5 }],
    [{ t: 5, v: 5 }, { t: 14, v: 1 }, { t: N, v: 9 }],
    [{ t: 10, v: 9 }, { t: N, v: 10 }],
];

module.exports =
    (month = 1, date = 0, dcoef = 0) =>
    (r => !r ? N : r.find(v => Number.isNaN(v.t) || date < dcoef + v.t).v)(
        table[month - 1]);