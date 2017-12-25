'use strict';

import tableXY from './../../dist/util/tableXY';

const label = ['Foo', 'Bar', 'Baz', 'Qux'];
const table = [
    [0, 1, 2, 3],
    [2, 3, 1, 0],
    [2, 4, -1, 1],
];

test(
    'Whether is `tableXY` function object.',
    () => expect(tableXY).toBeInstanceOf(Function));
test(
    'Whether is result of `tableXY()` function object.',
    () => expect(tableXY({ label, table })).toBeInstanceOf(Function));
test(
    'When a position are specified, it returns a potential.',
    () => {
        const params = [
            { x: 0, y: 0, v: 'Foo' },
            { x: 3, y: 0, v: 'Qux' },
            { x: 0, y: 2, v: 'Baz' },
            { x: 3, y: 2, v: 'Bar' },
        ];
        const accessor = tableXY({ label, table });
        for (let { v, ...p } of params) {
            expect(accessor(p)).toBe(v);
        }
    });
test(
    'When a position was not specified, it returns a (0, 0) value.',
    () => {
        const accessor = tableXY({ label, table });
        expect(accessor()).toEqual(accessor({ x: 0, y: 0 }));
        expect(accessor({ x: 1 })).toEqual(accessor({ x: 1, y: 0 }));
        expect(accessor({ y: 1 })).toEqual(accessor({ x: 0, y: 1 }));
    });
test(
    'When a position are outside range, it returns a undefined.',
    () => {
        const params = [
            { x: -1, y: 0 },
            { x: 4, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 3 },
            { x: -1, y: -1 },
            { x: 4, y: -1 },
            { x: -1, y: 3 },
            { x: 4, y: 3 },
        ];
        const accessor = tableXY({ label, table });
        for (let { v, ...p } of params) {
            expect(accessor(p)).toBe('');
        }
    });
test(
    'When a index on specified position are outside range, it returns a falsy.',
    () => {
        const params = [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
        ];
        const accessor = tableXY({ label, table });
        for (let { v, ...p } of params) {
            expect(accessor(p)).toBe('');
        }
    });