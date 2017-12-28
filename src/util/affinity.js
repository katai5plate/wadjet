'use strict';

/**
 * Evaluation function used for sorting in affinity order.
 * @param {string} a Personality type.
 * @param {string} b Personality type.
 * @returns {number} Evaluation rate.
 */
const affinity =
    (a, b) =>
    ((_a, _b) =>
        _a === _b || /[^EAH]/.test(_b) ? 0 :
        _a === 'H' ? (_b === 'E' ? 1 : -1) :
        _a === 'E' ? (_b === 'A' ? 1 : -1) :
        _a === 'A' ? (_b === 'H' ? 1 : -1) :
        0
    )(a.charAt().toUpperCase(), b.charAt().toUpperCase());

export default affinity;