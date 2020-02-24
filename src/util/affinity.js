const { natureNames } = require('../const.json');

const { arts, education, humanities } = natureNames;

const [A, E, H] = [arts, education, humanities].map((x) => x.prefix);

/**
 * アフィニティ順のソートに使用される評価関数。
 * @param {Wadjet.NatureVector} a Personality type.
 * @param {Wadjet.NatureVector} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpA = (a, b) =>
  (a === E && b === A) || (a === A && b === H) || (a === E && b === H) ? 1 : -1;

/**
 * アフィニティ順のソートに使用される評価関数。
 * @param {Wadjet.NatureVector} a Personality type.
 * @param {Wadjet.NatureVector} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpE = (a, b) =>
  (a === H && b === E) || (a === E && b === A) || (a === H && b === A) ? 1 : -1;

/**
 * アフィニティ順のソートに使用される評価関数。
 * @param {Wadjet.NatureVector} a Personality type.
 * @param {Wadjet.NatureVector} b Personality type.
 * @return {-1|1} Comparison result.
 */
const cmpH = (a, b) =>
  (a === A && b === H) || (a === H && b === E) || (a === A && b === E) ? 1 : -1;

/** Collection of comparator. */
const cmp = { A: cmpA, E: cmpE, H: cmpH };

/**
 * アフィニティ順のソートに使用される評価関数を作成します。
 * @param {string} type Personality type.
 */
const createComparator = (type) =>
  /**
   * @param {string} a Personality type.
   * @param {string} b Personality type.
   * @returns {-1|0|1}
   */
  (a, b) =>
    ((x, y, t, p) =>
      x === y || p.test(x) || p.test(y) || p.test(t) ? 0 : cmp[t](x, y))(
      a.charAt().toUpperCase(),
      b.charAt().toUpperCase(),
      type.charAt().toUpperCase(),
      new RegExp(`[^${A}${E}${H}]`),
    );

module.exports = createComparator;
