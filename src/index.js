'use strict';

import _natures from './enum/natures';
import { createComparator } from './util/affinity';
import _bizTeam from './util/bizTeam';
import _personality from './util/personality';
import _naturesDesc from './master/naturesDesc';

/**
 * Create personality types list of best affinitic for team.
 * @param {Object.<string, number>} business Good business formation levels.
 * @param {string} personality Personality type.
 * @param {string} [position] Position type.
 * @returns {Object.<string, string>} Personality types list.
 */
const bizTeam = _bizTeam;

/**
 * @callback Comparator
 * @param {string} a Personality type.
 * @param {string} b Personality type.
 * @returns {-1|0|1} Comparison result.
 */

/**
 * Create evaluation function used for sorting in affinity order.
 * @param {string} type Personality type.
 * @returns {Comparator} Comparator function.
 */
const comparator = createComparator;

/**
 * Get the details corresponding to the specified nature.
 * @param {string} key Nature key.
 * @returns {{communication: string, management: string, response: string, position: string, motivation: string, nature: string, romance: Object.<string, number>, business: Object.<string, number>}} Detail.
 */
const detail = _naturesDesc;

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
 * Natures values list.
 * @type {ReadonlyArray.<string>}
 */
const types = _natures;

export default Object.freeze({
    bizTeam,
    comparator,
    detail,
    personality,
    types,
});