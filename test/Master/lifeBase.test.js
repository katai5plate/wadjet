'use strict';

const lifeBase = require('../../src/master/lifeBase');

test(
    'Whether is `lifeBase` function object.',
    () => expect(lifeBase).toBeInstanceOf(Function));
test(
    'When a position are specified, it returns a lifeBase.',
    () => {
        const params = [
            { x: 0, y: 0 },
            { x: 9, y: 0 },
            { x: 0, y: 9 },
            { x: 9, y: 9 },
        ];
        for (let p of params) {
            expect(lifeBase(p)).toMatch(/^[ADEFIOQS][a-z]+/);
        }
    });
test(
    'When a position was not specified, it returns a (0, 0) value.',
    () => {
        expect(lifeBase()).toEqual(lifeBase({ x: 0, y: 0 }));
        expect(lifeBase({ x: 5 })).toEqual(lifeBase({ x: 5, y: 0 }));
        expect(lifeBase({ y: 5 })).toEqual(lifeBase({ x: 0, y: 5 }));
    });
test(
    'When a position are outside range, it returns a falsy.',
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
        for (let p of params) { expect(lifeBase(p)).toBe(''); }
    });