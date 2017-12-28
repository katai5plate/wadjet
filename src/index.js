'use strict';

import _natures from './enum/natures';
import _affinity from './util/affinity';
import _calculator_deprecated from './util/calculator_deprecated';
import _personality from './util/personality';
import _naturesDesc from './master/naturesDesc';

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 * 
 * It can be set from 1873-02-01 to 2050-12-31.
 * @throws {Error} When birthday specified invalid value.
 * @deprecated This function is deprecated in version 4.0.0.
 * 
 * Use `personality` function.
 */
const calc = _calculator_deprecated;

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 * 
 * It can be set from 1873-02-01 to 2050-12-31.
 * @returns {{cycle: number, inner: string, lifeBase: string, outer: string, potential: string, workstyle: string}} Personality.
 * @throws {Error} When birthday specified invalid value.
 */
const personality = _personality;

/**
 * Get the details corresponding to the specified nature.
 * @param {string} key Nature key.
 * @returns {{communication: string, management: string, response: string, position: string, motivation: string, nature: string, romance: Object.<string, number>, business: Object.<string, number>}} Detail.
 */
const detail = _naturesDesc;

/**
 * Natures values list.
 * @type {ReadonlyArray.<string>}
 */
const types = _natures;

/**
 * Evaluation function used for sorting in affinity order.
 * @param {string} a Personality type.
 * @param {string} b Personality type.
 * @returns {number} Evaluation rate.
 */
const affinity = _affinity;

export default Object.freeze({
    affinity,
    calc,
    personality,
    detail,
    types
});