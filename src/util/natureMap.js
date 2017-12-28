'use strict';

import natures from '../enum/natures';

/**
 * Generate a nature map by specified table.
 * @param {number[][]} table Values table.
 */
const natureMap =
    table =>
    table
    .map(
        (r, i) => ({
            [natures[i]]: r
                .map(
                    (v, i) => ({
                        [natures[i]]: v
                    }))
                .reduce((p, c) => ({ ...p, ...c }), {})
        }))
    .reduce((p, c) => ({ ...p, ...c }), {});

export default natureMap;