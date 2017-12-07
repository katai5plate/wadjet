'use strict';

const potential = require('../../src/Master/potential');

test(
    'Whether is `potential` function object.',
    () => expect(potential).toBeInstanceOf(Function));
test(
    'When a position are specified, it returns a potential.',
    () => {
        const params = [
            { x: 0, y: 0 },
            { x: 9, y: 0 },
            { x: 0, y: 9 },
            { x: 9, y: 9 },
        ];
        for (let p of params) {
            expect(potential(p)).toMatch(/^[CEFIN][io]$/);
        }
    });
test(
    'When a position was not specified, it returns a (0, 0) value.',
    () => {
        expect(potential()).toEqual(potential({ x: 0, y: 0 }));
        expect(potential({ x: 5 })).toEqual(potential({ x: 5, y: 0 }));
        expect(potential({ y: 5 })).toEqual(potential({ x: 0, y: 5 }));
    });
test(
    'When a position are outside range, it returns a undefined.',
    () => {
        const params = [
            { x: -1, y: 0 },
            { x: 10, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 10 },
            { x: -1, y: -1 },
            { x: 10, y: -1 },
            { x: -1, y: 10 },
            { x: 10, y: 10 },
        ];
        for (let p of params) { expect(potential(p)).toBeUndefined(); }
    });