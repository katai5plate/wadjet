'use strict';

/**
 * Evaluation function used for sorting in affinity order.
 * @deprecated This function is DEPRECATED since version 3.3.0. And will no longer since version 4.0.0.
 * 
 * Use `comparator` function.
 * @param {string} a Personality type.
 * @param {string} b Personality type.
 * @returns {number} Comparison result.
 */
export const affinity =
    (a, b) => {
        console.warn(
            'This function is DEPRECATED since version 3.3.0. And will no longer since version 4.0.0. Use `comparator` function.'
        );
        const _a = a.charAt().toUpperCase();
        const _b = b.charAt().toUpperCase();
        const result =
            _a === _b || /[^EAH]/.test(_b) ? 0 :
            _a === 'H' ? (_b === 'E' ? 1 : -1) :
            _a === 'E' ? (_b === 'A' ? 1 : -1) :
            _a === 'A' ? (_b === 'H' ? 1 : -1) :
            0;
        return result;
    };

/**
 * Evaluation function used for sorting in affinity order.
 * @param {'A'|'E'|'H'} a Personality type.
 * @param {'A'|'E'|'H'} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpA =
    (a, b) =>
    a === 'E' && b === 'A' ||
    a === 'A' && b === 'H' ||
    a === 'E' && b === 'H' ?
    1 : -1;
/**
 * Evaluation function used for sorting in affinity order.
 * @param {'A'|'E'|'H'} a Personality type.
 * @param {'A'|'E'|'H'} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpE =
    (a, b) =>
    a === 'H' && b === 'E' ||
    a === 'E' && b === 'A' ||
    a === 'H' && b === 'A' ?
    1 : -1;
/**
 * Evaluation function used for sorting in affinity order.
 * @param {'A'|'E'|'H'} a Personality type.
 * @param {'A'|'E'|'H'} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpH =
    (a, b) =>
    a === 'A' && b === 'H' ||
    a === 'H' && b === 'E' ||
    a === 'A' && b === 'E' ?
    1 : -1;

const cmp = { A: cmpA, E: cmpE, H: cmpH };

/**
 * Create evaluation function used for sorting in affinity order.
 * @param {string} type Personality type.
 */
export const createComparator =
    type =>
    /**
     * @param {string} a Personality type.
     * @param {string} b Personality type.
     * @returns {-1|0|1}
     */
    (a, b) =>
    ((x, y, t, p) =>
        x === y || p.test(x) || p.test(y) || p.test(t) ? 0 : cmp[t](x, y)
    )(
        a.charAt().toUpperCase(),
        b.charAt().toUpperCase(),
        type.charAt().toUpperCase(),
        /[^EAH]/) >> 0;

export default affinity;