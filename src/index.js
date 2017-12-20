'use strict';

const coefMonthly = require('./Master/coefMonthly');
const lifeBase = require('./Master/lifeBase');
const lifeBaseCoef = require('./Master/lifeBaseCoef');
const natures = require('./Master/natures');
const naturesDesc = require('./Master/naturesDesc');
const potential = require('./Master/potential');

const from =
    (date = new Date()) =>
    (typeof date) === 'string' ? new Date(date) : date;

const ymd =
    (birth = new Date()) => {
        const ld = from(birth);
        const dcoef = coefMonthly(ld);
        if (Number.isNaN(dcoef)) { throw new Error(); }
        return {
            year: ld.getFullYear(),
            month: ld.getMonth() + 1,
            date: ld.getDate(),
            dcoef
        };
    };

const naturePotential =
    (cycle = 0) =>
    (code => ({ mn: code(natures, 12), mp: code(potential, 10) }))(
        (func = ({ x = 0, y = 0 }) => `${''}`, limit = 0) =>
        (v = 0) =>
        func({ x: (v % limit || limit) - 1, y: cycle }));

module.exports =
    (birth = new Date()) => {
        const { year, month, date, dcoef } = ymd(birth);
        const yh = year * 0.01 >> 0;
        const yl = year % 100;
        const early = (month <= 2) >> 0;
        const mb3 = month + early * 12;
        const inner = [5.25 * (yl - early), 0.6 * mb3 + 1, 4.25 * yh]
            .reduce((p, c) => p + (c >> 0), date + 1);
        const dGEcof = date >= dcoef;
        const outer = (month - (!dGEcof >> 0) || 12) + 1;
        const cycle = (inner + 6) % 10;
        const { mn, mp } = naturePotential(cycle);
        const desc = (v = 0) => (n => naturesDesc(n))(mn(v));
        const ymb = yh * 100 + yl - (month === 2 && dGEcof ? early : 0);
        const lbc = lifeBaseCoef({ month, dcoef: date - dcoef }) - 1;
        return {
            inner: desc(inner + yh * 4 + mb3 * 6),
            outer: desc(outer),
            cycle: cycle || 10,
            lifeBase: lifeBase({ x: lbc, y: cycle }),
            potential: `${mp(ymb + 7)}-${mp(year * 2 + outer + 2)}`,
            workstyle: mn(ymb + 9),
        };
    };