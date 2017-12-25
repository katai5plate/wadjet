'use strict';

import natures from '~/dist/enum/natures';

import romance from './natureRomance';
import business from './natureBiz';

/** Communication values list. */
const communication = ['Fix', 'Flex'];

/** Management values list. */
const management = ['Care', 'Hope'];

/** Response values list. */
const response = ['Action', 'Mind'];

/** Position values list. */
const position = ['Adjust', 'Brain', 'Direct', 'Quick'];

/** Motivation values list. */
const motivation = [
    'Competition', 'OwnMind', 'Power', 'Safety', 'SkillUp', 'Status',
];

/**
 * Generate description data row.
 * @param {number[]} row row values.
 */
const generate = (...row) =>
    Object.freeze({
        communication: communication[row[0]] || '',
        management: management[row[1]] || '',
        response: response[row[2]] || '',
        position: position[row[3]] || '',
        motivation: motivation[row[4]] || '',
        nature: natures[row[5]] || '',
        romance: romance[natures[row[5]]] || {},
        business: business[natures[row[5]]] || {},
    });

/** Default value when key did not found. */
const unknown = generate(-1, -1, -1, -1, -1, -1);

/** Map of natures description data. */
const map =
    new Map([
        [1, 1, 1, 1, 5],
        [1, 0, 0, 0, 2],
        [1, 0, 1, 2, 5],
        [1, 1, 0, 3, 2],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 2, 1],
        [0, 1, 0, 3, 0],
        [0, 1, 0, 3, 4],
        [0, 0, 0, 0, 4],
        [1, 1, 1, 1, 3],
        [1, 0, 1, 2, 3],
    ].map((value, index) => [natures[index], generate(...value, index)]));

/**
 * Get the details corresponding to the specified nature.
 * @param {string} key Nature key.
 */
export default key => map.get(key) || unknown;