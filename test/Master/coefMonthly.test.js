'use strict';

const { LocalDate } = require('js-joda');
const coefMonthly = require('../../src/Master/coefMonthly');

test(
    'Whether is `coefMonthly` function object.',
    () => expect(coefMonthly).toBeInstanceOf(Function));
test(
    'When a date is specified, it returns a coefficient.',
    () => {
        const dateA = LocalDate.parse('1873-02-01');
        expect(coefMonthly(dateA)).toBeGreaterThanOrEqual(4);
        expect(coefMonthly(dateA)).toBeLessThanOrEqual(9);
        const dateB = LocalDate.parse('2050-12-01');
        expect(coefMonthly(dateA)).toBeGreaterThanOrEqual(4);
        expect(coefMonthly(dateA)).toBeLessThanOrEqual(9);
    });
test(
    'When a date was not specified, it returns a today coefficient.',
    () => {
        const date = LocalDate.now();
        expect(coefMonthly()).toEqual(coefMonthly(date));
    });
test(
    'Ignore difference in date.',
    () => {
        const dateA = LocalDate.parse('1873-02-01');
        const dateB = LocalDate.parse('1873-02-28');
        expect(coefMonthly(dateA)).toEqual(coefMonthly(dateB));
    });
test(
    'Date coefficients outside range cannot be acquired.',
    () => {
        const dateA = LocalDate.parse('1873-01-01');
        const dateB = LocalDate.parse('2051-01-01');
        expect(coefMonthly(dateA)).toBeUndefined();
        expect(coefMonthly(dateB)).toBeUndefined();
    });