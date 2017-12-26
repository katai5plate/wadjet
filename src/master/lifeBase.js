'use strict';

import tableXY from '../util/tableXY';
import label from '../enum/lifeBase';

/** A table of life base corresponding to month and coefficients. */
const table = [
    [2, 3, 5, 4, 6, 1, 7, 0, 8, 9],
    [9, 8, 3, 2, 4, 5, 1, 6, 0, 7],
    [8, 9, 2, 3, 5, 4, 6, 1, 7, 0],
    [0, 7, 9, 8, 3, 2, 4, 5, 1, 6],
    [7, 0, 8, 9, 2, 3, 5, 4, 6, 1],
    [1, 6, 0, 7, 9, 8, 3, 2, 4, 5],
    [6, 1, 7, 0, 8, 9, 2, 3, 5, 4],
    [4, 5, 1, 6, 0, 7, 9, 8, 3, 2],
    [5, 4, 6, 1, 7, 0, 8, 9, 2, 3],
    [3, 2, 4, 5, 1, 6, 0, 7, 9, 8],
];

/**
 * Get life base that corresponding to
 * the specified month and coefficients.
 */
export default tableXY(label, table);