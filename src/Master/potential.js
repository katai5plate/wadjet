'use strict';

/**
 * A table of potentials corresponding to month and coefficients.
 *
 * Vertical axis is coefficient, and horizontal axis is month.
 */
const table = [
    ['Ei', 'Eo', 'Fi', 'Fo', 'Ni', 'No', 'Ci', 'Co', 'Ii', 'Io'],
    ['Io', 'Ii', 'Eo', 'Ei', 'Fo', 'Fi', 'No', 'Ni', 'Co', 'Ci'],
    ['Ii', 'Io', 'Ei', 'Eo', 'Fi', 'Fo', 'Ni', 'No', 'Ci', 'Co'],
    ['Co', 'Ci', 'Io', 'Ii', 'Eo', 'Ei', 'Fo', 'Fi', 'No', 'Ni'],
    ['Ci', 'Co', 'Ii', 'Io', 'Ei', 'Eo', 'Fi', 'Fo', 'Ni', 'No'],
    ['No', 'Ni', 'Co', 'Ci', 'Io', 'Ii', 'Eo', 'Ei', 'Fo', 'Fi'],
    ['Ni', 'No', 'Ci', 'Co', 'Ii', 'Io', 'Ei', 'Eo', 'Fi', 'Fo'],
    ['Fo', 'Fi', 'No', 'Ni', 'Co', 'Ci', 'Io', 'Ii', 'Eo', 'Ei'],
    ['Fi', 'Fo', 'Ni', 'No', 'Ci', 'Co', 'Ii', 'Io', 'Ei', 'Eo'],
    ['Eo', 'Ei', 'Fo', 'Fi', 'No', 'Ni', 'Co', 'Ci', 'Io', 'Ii'],
];

const lengthX = Math.min(...table.map(r => r.length));
const lengthY = Math.min(...table.map(r => r.length));

/**
 * Get potentials that corresponding to
 * the specified month and coefficients.
 */
module.exports = ({ x = 1, y = 0 }) =>
    table[y][x];