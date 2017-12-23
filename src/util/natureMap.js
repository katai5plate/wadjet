'use strict';

/** Natures values list. */
const natures = require('../enum/natures');

/**
 * Generate a nature map by specified table.
 * @param {number[][]} table Values table.
 */
module.exports =
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