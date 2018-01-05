'use strict';

import tableXY from '../util/tableXY';
import { nature } from '../enum';

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
export default tableXY(nature, table);