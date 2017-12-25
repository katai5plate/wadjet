'use strict';

import natures from '../../dist/master/natures';

test(
    'Whether is `natures` function object.',
    () => expect(natures).toBeInstanceOf(Function));
test(
    'When a position are specified, it returns a natures.',
    () => {
        const params = [
            { x: 0, y: 0 },
            { x: 11, y: 0 },
            { x: 0, y: 9 },
            { x: 11, y: 9 },
        ];
        for (let p of params) {
            expect(natures(p)).toMatch(/^[AEH]\d{3}/);
        }
    });
test(
    'When a position was not specified, it returns a (0, 0) value.',
    () => {
        expect(natures()).toEqual(natures({ x: 0, y: 0 }));
        expect(natures({ x: 5 })).toEqual(natures({ x: 5, y: 0 }));
        expect(natures({ y: 5 })).toEqual(natures({ x: 0, y: 5 }));
    });
test(
    'When a position are outside range, it returns a falsy.',
    () => {
        const params = [
            { x: -1, y: 0 },
            { x: 12, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 10 },
            { x: -1, y: -1 },
            { x: 12, y: -1 },
            { x: -1, y: 10 },
            { x: 12, y: 10 },
        ];
        for (let p of params) { expect(natures(p)).toBe(''); }
    });