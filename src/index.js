'use strict';

const coefMonthly = require('./Master/coefMonthly')

const { LocalDate, nativeJs } = require('js-joda');

const from =
    (date = new Date()) =>
    (typeof date) === 'string' ? LocalDate.parse(date) :
    LocalDate.from(nativeJs(date));

module.exports =
    (birth = new Date()) => {
        const b = from(birth);
        const dcof = coefMonthly(b);
        if (Number.isNaN(dcof)) { return {}; }
        const yh = b.year() / 100;
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
        const bb = b.monthValue() - (!dGEcof >> 0);
        return {};
    };