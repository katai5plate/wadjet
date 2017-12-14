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
    }

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
        const zero = (l = 0, v = 0) => v || l;
        const outer = zero(12, month - !dGEcof >> 0) + 1;
        const cycle = (inner + 6) % 10;
        const mz = (l = 0, v = 0) => ({ x: zero(l, v % l) - 1, y: cycle });
        const mn = (v = 0) => natures(mz(12, v));
        const mp = (v = 0) => potential(mz(10, v));
        const mnd =
            (v = 0) => {
                const nature = mn(v);
                let d = naturesDesc.A000;
                d = naturesDesc[nature];
                return { ...d, nature };
            };
        const ymb3 = yh * 100 + yl - (month === 2 && dGEcof ? m12 : 0);
        const lbx = lifeBaseCoef(month, date, dcoef) - 1;
        return {
            inner: mnd(inner + yh * 4 + mb3 * 6),
            outer: mnd(outer),
            cycle: zero(10, cycle),
            lifeBase: lifeBase({ x: lbx, y: cycle }),
            potential: `${mp(ymb3 + 7)}-${mp(year * 2 + outer + 2)}`,
            workstyle: mn(ymb3 + 9),
        };
    };