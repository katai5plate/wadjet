import { nature } from '../enum';

import '../type';

/**
 * Generate a nature map by specified table.
 * @param {number[][]} table Values table.
 * @returns {Wadjet.NatureAffinityMap} Personality map.
 */
const natureMap =
  table =>
    table.map((r, ri) => ({
      [nature[ri]]:
        r
          .map((v, vi) => ({ [nature[vi]]: v }))
          .reduce((p, c) => ({ ...p, ...c }), {}),
    })).reduce((p, c) => ({ ...p, ...c }), {});

export default natureMap;
