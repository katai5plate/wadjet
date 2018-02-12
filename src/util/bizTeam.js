import detail from '../master/detail';

import { createComparator } from './affinity';

import '../type';

/**
 * Create personality types list of best affinitic for team.
 * @param {Wadjet.NatureAffinity} business Good business formation levels.
 * @param {string} personality Personality type.
 * @param {Wadjet.Position} [position] Position type.
 * @returns {Object.<string, string>} Personality types list.
 */
const bizTeam =
  (business, personality, position) => {
    const map =
      Object
        .entries(business)
        .map(([type, pri]) =>
          ({ type, pri, pos: detail(type).position }));
    const comparator = createComparator(personality);
    // NOTE: sort() function performs a destructive change,
    // and return value depends on environment.
    map.sort(({ pri: pa, type: ta }, { pri: pb, type: tb }) =>
      (pa !== pb ? -(pa - pb) : comparator(ta, tb)));
    const result =
      map.reduce((p, { pos, type }) =>
        (pos === position || pos in p ? p :
          ({ ...p, [pos]: type })), {});
    return result;
  };

export default bizTeam;
