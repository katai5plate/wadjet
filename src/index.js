'use strict';

const { LocalDate, nativeJs } =
(() => {
    const joda = require('js-joda');
    return {
        LocalDate: joda.LocalDate,
        nativeJs: joda.nativeJs
    };
})();

const from =
    (date = new Date()) =>
    (typeof date) === 'string' ? LocalDate.parse(date) :
    LocalDate.from(nativeJs(date));

module.exports =
    (birth = new Date()) => {
        const b = from(birth);
        return {};
    };