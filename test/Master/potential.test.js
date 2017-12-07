'use strict';

const potential = require('../../src/Master/potential');

test(
    'Whether is it function object.',
    () => expect(potential).toBeInstanceOf(Function));
test(
    'When a month and coefficient are specified, it returns a potential.',
    () => {
        const params = [
            { month: 1, coefficient: 0 },
            { month: 12, coefficient: 0 },
            { month: 1, coefficient: 9 },
            { month: 12, coefficient: 9 },
        ];
        for (let p of params) {
            console.log(p, potential(p));
            expect(potential(p)).toMatch(/^[CEFIN][io]$/);
        }
    });