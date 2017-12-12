'use strict';

/** Natures values list. */
const label = [
    'A000',
    'A024',
    'A100',
    'A888',
    'E001',
    'E125',
    'E555',
    'E919',
    'H012',
    'H025',
    'H108',
    'H789',
];

/** A table of natures corresponding to month and coefficients. */
const table = [
    [2, 8, 3, 7, 10, 4, 0, 9, 1, 5, 11, 6],
    [3, 8, 2, 6, 11, 5, 1, 9, 0, 4, 10, 7],
    [5, 11, 6, 2, 8, 3, 7, 10, 4, 0, 9, 1],
    [4, 10, 7, 3, 8, 2, 6, 11, 5, 1, 9, 0],
    [0, 9, 1, 5, 11, 6, 2, 8, 3, 7, 10, 4],
    [4, 10, 7, 3, 8, 2, 6, 11, 5, 1, 9, 0],
    [0, 9, 1, 5, 11, 6, 2, 8, 3, 7, 10, 4],
    [1, 9, 0, 4, 10, 7, 3, 8, 2, 6, 11, 5],
    [7, 10, 4, 0, 9, 1, 5, 11, 6, 2, 8, 3],
    [6, 11, 5, 1, 9, 0, 4, 10, 7, 3, 8, 2],
];

/**
 * Get natures that corresponding to
 * the specified month and coefficients.
 */
module.exports = require('./tableXY')({ label, table });