'use strict';

import tableXY from './../util/tableXY';
import label from './../enum/potential';

/** A table of potentials corresponding to month and coefficients. */
const table = [
    [2, 3, 4, 5, 8, 9, 0, 1, 6, 7],
    [7, 6, 3, 2, 5, 4, 9, 8, 1, 0],
    [6, 7, 2, 3, 4, 5, 8, 9, 0, 1],
    [1, 0, 7, 6, 3, 2, 5, 4, 9, 8],
    [0, 1, 6, 7, 2, 3, 4, 5, 8, 9],
    [9, 8, 1, 0, 7, 6, 3, 2, 5, 4],
    [8, 9, 0, 1, 6, 7, 2, 3, 4, 5],
    [5, 4, 9, 8, 1, 0, 7, 6, 3, 2],
    [4, 5, 8, 9, 0, 1, 6, 7, 2, 3],
    [3, 2, 5, 4, 9, 8, 1, 0, 7, 6],
];

/**
 * Get potentials that corresponding to
 * the specified month and coefficients.
 */
export default tableXY({ label, table });