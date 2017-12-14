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

module.exports =
    (birth = new Date()) => {
        const b = from(birth);
        const dcof = coefMonthly(b);
        if (Number.isNaN(dcof)) { throw new Error(); }
        const yh = (b.year() / 100) >> 0;
        const yl = b.year() % 100;
        const m12 = (b.monthValue() <= 2) >> 0;
        const mb3 = b.monthValue() + m12 * 12;
        const aa =
            (fi =>
                fi(5.25, yl - m12) +
                fi(0.6, mb3 + 1) +
                fi(4.25, yh) +
                b.dayOfMonth() + 1
            )((f = 0, v = 0) => (f * v) >> 0)
        const dGEcof = b.dayOfMonth() >= dcof;
        const zero = (l = 0, v = 0) => v || l;
        const bb = zero(12, b.monthValue() - !dGEcof >> 0) + 1;
        const cc = (aa + 6) % 10;
        const mz = (l = 0, v = 0) => zero(l, v % l);
        const mn = (v = 0) => natures({ x: mz(12, v) - 1, y: cc });
        const mp = (v = 0) => potential({ x: mz(10, v) - 1, y: cc });
        const mnd =
            (v = 0) => {
                const nature = mn(v);
                let d = naturesDesc.A000;
                d = naturesDesc[nature];
                return { ...d, nature };
            };
        const ymb3 =
            yh * 100 + yl - (b.monthValue() === 2 && dGEcof ? m12 : 0);
        const coef = lifeBaseCoef(b.monthValue(), b.dayOfMonth(), dcof);
        return {
            inner: mnd(aa + yh * 4 + mb3 * 6),
            outer: mnd(bb),
            cycle: zero(10, cc),
            lifeBase: lifeBase({ x: coef - 1, y: cc }),
            potential: `${mp(ymb3 + 7)}-${mp(b.year() * 2 + bb + 2)}`,
            workstyle: mn(ymb3 + 9),
        };
    };