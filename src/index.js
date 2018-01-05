'use strict';

import { nature } from './enum';
import { createComparator } from './util/affinity';
import _bizTeam from './util/bizTeam';
import _personality from './util/personality';
import _naturesDesc from './master/naturesDesc';

import './type';

/**
 * Create personality types list of best affinitic for team.
 * @param {Wadjet.NatureAffinity} business Good business formation levels.
 * @param {Wadjet.Nature} personality Personality type.
 * @param {Wadjet.Position} [position] Position type.
 * @returns {Object.<string, Wadjet.Nature>} Personality types list.
 */
const bizTeam = _bizTeam;

/**
 * Create evaluation function used for sorting in affinity order.
 * @param {Wadjet.Nature} type Personality type.
 * @returns {Wadjet.Comparator} Comparator function.
 */
const comparator = createComparator;

/**
 * Get the details corresponding to the specified nature.
 * @param {Wadjet.Nature} key Nature key.
 * @returns {Wadjet.NatureDetail} Detail.
 */
const detail = _naturesDesc;

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 * 
 * It can be set from 1873-02-01 to 2050-12-31.
 * @returns {Wadjet.Personality} Personality.
 * @throws {Error} When birthday specified invalid value.
 */
const personality = _personality;

/**
 * Natures values list.
 * @type {ReadonlyArray<Wadjet.Nature>}
 */
const types = nature;

export default Object.freeze({
    bizTeam,
    comparator,
    detail,
    personality,
    types,
});