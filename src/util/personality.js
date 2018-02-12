import coefMonthly from '../master/coefMonthly';
import lifeBase from '../master/lifeBase';
import lifeBaseCoef from '../master/lifeBaseCoef';
import natures from '../master/natures';
import potential from '../master/potential';

import '../type';

/**
 * Create to year, month, date and coefficient of date from input.
 * @param {Date|string} birth Birthday.
 * @return {Wadjet.CoefMonthly & {date: number}}
 * @throws {Error} When birthday was out of range.
 */
const ymd =
  (birth) => {
    const ld = (typeof birth) === 'string' ? new Date(birth) : birth;
    const dcoef = coefMonthly(ld);
    if (Number.isNaN(dcoef)) { throw new Error(); }
    return {
      year: Math.floor(ld.getFullYear()),
      month: Math.floor(ld.getMonth() + 1),
      date: Math.floor(ld.getDate()),
      dcoef,
    };
  };

/**
 * Generate the calculation function of the nature and the potential.
 * @param {number} cycle cycle coef.
 */
const naturePotential =
  (cycle) => {
    const code =
      (func, limit) =>
        /**
         * @param {number} v
         * @returns {string}
         */
        v => func({ x: (v % limit || limit) - 1, y: cycle });
    return { mn: code(natures, 12), mp: code(potential, 10) };
  };

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 *
 * It can be set from 1873-02-01 to 2050-12-31.
 * @returns {Wadjet.Personality} Personality.
 * @throws {Error} When birthday specified invalid value.
 */
const personality =
  (birth) => {
    const {
      year, month, date, dcoef,
    } = ymd(birth);
    const yh = Math.floor(year * 0.01);
    const early = Math.floor(month <= 2);
    const icoef = month + (early * 12);
    const inner =
      ([5.25 * ((year % 100) - early), 0.6 * (icoef + 1), 4.25 * yh]
        .reduce((p, c) => p + Math.floor(c), date + 1));
    const ge = date >= dcoef;
    const outer = (month - Math.floor(!ge) || 12) + 1;
    const ymb = year - (month === 2 && ge ? early : 0);
    const lbc = lifeBaseCoef(month, date - dcoef) - 1;
    const cycle = (inner + 6) % 10;
    const { mn, mp } = naturePotential(cycle);
    return {
      inner: mn(inner + (yh * 4) + (icoef * 6)),
      outer: mn(outer),
      cycle: cycle || 10,
      lifeBase: lifeBase({ x: lbc, y: cycle }),
      potential: `${mp(ymb + 7)}-${mp((year * 2) + outer + 2)}`,
      workstyle: mn(ymb + 9),
    };
  };

export default personality;
