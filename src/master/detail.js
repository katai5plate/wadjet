import {
  brain,
  communication,
  management,
  motivation,
  nature,
  position,
  response,
} from '../enum';
import romance from './natureRomance';
import business from './natureBiz';

import '../type';

/**
 * Generate description data row.
 * @param {number[]} row row values.
 */
const generate = (...row) =>
  ({
    communication: communication[row[0]] || '',
    management: management[row[1]] || '',
    response: response[row[2]] || '',
    position: position[row[3]] || '',
    motivation: motivation[row[4]] || '',
    brain: brain[row[5]] || '',
    romance: romance[nature[row[6]]] || {},
    business: business[nature[row[6]]] || {},
  });

/**
 * Default value when key did not found.
 * @type {Wadjet.NatureDetail}
 */
const unknown = generate(-1, -1, -1, -1, -1, -1);

/**
 * Map of natures description data.
 * @type {Map<string, Wadjet.NatureDetail>}
 */
const map =
    new Map([
    [1, 1, 1, 1, 5, 1],
    [1, 0, 0, 0, 2, 1],
    [1, 0, 1, 2, 5, 0],
    [1, 1, 0, 3, 2, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 1, 2, 1, 0],
    [0, 1, 0, 3, 0, 0],
    [0, 1, 0, 3, 4, 0],
    [0, 0, 0, 0, 4, 1],
    [1, 1, 1, 1, 3, 1],
    [1, 0, 1, 2, 3, 0],
  ].map((value, index) => [nature[index], generate(...value, index)]));

/**
 * Get the details corresponding to the specified nature.
 * @param {string} key Nature key.
 * @returns {Wadjet.NatureDetail} Detail.
 */
const detail = key => ({ ...(map.get(key) || unknown) });

export default detail;
