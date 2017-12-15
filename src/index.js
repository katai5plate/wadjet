'use strict';

const coefMonthly = require('./Master/coefMonthly');
const lifeBase = require('./Master/lifeBase');
const lifeBaseCoef = require('./Master/lifeBaseCoef');
const natures = require('./Master/natures');
const naturesDesc = require('./Master/naturesDesc');
const potential = require('./Master/potential');

const { LocalDate, nativeJs } = require('js-joda');

const from =
    (date = new Date()) =>
    (typeof date) === 'string' ? LocalDate.parse(date) :
    LocalDate.from(nativeJs(date));

const ymd =
    (birth = new Date()) => {
        const ld = from(birth);
        const dcoef = coefMonthly(ld);
        if (Number.isNaN(dcoef)) { throw new Error(); }
        return {
            year: ld.year(),
            month: ld.monthValue(),
            date: ld.dayOfMonth(),
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
        const yh = (year / 100) >> 0;
        const yl = year % 100;
        const m12 = (month <= 2) >> 0;
        const mb3 = month + m12 * 12;
        const inner =
            (fi =>
                fi(5.25, yl - m12) +
                fi(0.6, mb3 + 1) +
                fi(4.25, yh) +
                date + 1
            )((f = 0, v = 0) => (f * v) >> 0)
        const dGEcof = date >= dcoef;
        const outer = (month - (!dGEcof >> 0) || 12) + 1;
        const cycle = (inner + 6) % 10;
        const { mn, mp } = naturePotential(cycle);
        const desc =
            (v = 0) => {
                const nature = mn(v);
                return { ...naturesDesc(nature), nature };
            };
        const ymb = yh * 100 + yl - (month === 2 && dGEcof ? m12 : 0);
        const lbp = { x: lifeBaseCoef(month, date, dcoef) - 1, y: cycle };
        return {
            inner: desc(inner + yh * 4 + mb3 * 6),
            outer: desc(outer),
            cycle: cycle || 10,
            lifeBase: lifeBase(lbp),
            potential: `${mp(ymb + 7)}-${mp(year * 2 + outer + 2)}`,
            workstyle: mn(ymb + 9),
        };
    };