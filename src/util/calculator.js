'use strict';

import coefMonthly from '~/dist/master/coefMonthly';
import lifeBase from '~/dist/master/lifeBase';
import lifeBaseCoef from '~/dist/master/lifeBaseCoef';
import natures from '~/dist/master/natures';
import naturesDesc from '~/dist/master/naturesDesc';
import potential from '~/dist/master/potential';

/**
 * Create to year, month, date and coefficient of date from input.
 * @param {Date|string} birth Birthday.
 */
const ymd =
    birth => {
        const ld = (typeof birth) === 'string' ? new Date(birth) : birth;
        const dcoef = coefMonthly(ld);
        if (Number.isNaN(dcoef)) { throw new Error(); }
        return {
            year: ld.getFullYear() >> 0,
            month: ld.getMonth() + 1 >> 0,
            date: ld.getDate() >> 0,
            dcoef
        };
    };

/**
 * Generate the calculation function of the nature and the potential.
 * @param {number} cycle cycle coef.
 */
const naturePotential =
    cycle =>
    (code => ({ mn: code(natures, 12), mp: code(potential, 10) }))(
        (func = ((x = 0, y = 0) => `${''}`), limit = 0) =>
        (v = 0) =>
        func((v % limit || limit) - 1, cycle));

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 * It can be set from 1873-02-01 to 2050-12-31.
 */
export default (birth = new Date()) => {
    const { year, month, date, dcoef } = ymd(birth);
    const yh = year * 0.01 >> 0;
    const early = (month <= 2) >> 0;
    const icoef = month + early * 12;
    const inner =
        ([5.25 * (year % 100 - early), 0.6 * (icoef + 1), 4.25 * yh]
            .reduce((p, c) => p + (c >> 0), date + 1));
    const ge = date >= dcoef;
    const outer = (month - (!ge >> 0) || 12) + 1;
    const ymb = year - (month === 2 && ge ? early : 0);
    const lbc = lifeBaseCoef(month, date - dcoef) - 1;
    const cycle = (inner + 6) % 10;
    const { mn, mp } = naturePotential(cycle);
    return {
        inner: { ...naturesDesc(mn(inner + yh * 4 + icoef * 6)) },
        outer: { ...naturesDesc(mn(outer)) },
        cycle: cycle || 10,
        lifeBase: lifeBase(lbc, cycle),
        potential: `${mp(ymb + 7)}-${mp(year * 2 + outer + 2)}`,
        workstyle: mn(ymb + 9),
    };
};