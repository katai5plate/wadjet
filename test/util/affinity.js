'use strict';

import * as affinity from '../../dist/util/affinity';

test(
    'Whether is `affinity.affinity` function object.',
    () => expect(affinity.affinity).toBeInstanceOf(Function));
test(
    'When comparing with the same value, returned 0',
    () => {
        expect(affinity.affinity('H', 'H')).toBe(0);
        expect(affinity.affinity('E', 'E')).toBe(0);
        expect(affinity.affinity('A', 'A')).toBe(0);
    });
test(
    'When comparing with the different value, returned 1 or -1',
    () => {
        expect(affinity.affinity('H', 'E')).toBe(1);
        expect(affinity.affinity('E', 'A')).toBe(1);
        expect(affinity.affinity('A', 'H')).toBe(1);
        expect(affinity.affinity('H', 'A')).toBe(-1);
        expect(affinity.affinity('A', 'E')).toBe(-1);
        expect(affinity.affinity('E', 'H')).toBe(-1);
    });
test(
    'When specified invalid value, returned 0',
    () => {
        expect(affinity.affinity('Z', 'H')).toBe(0);
        expect(affinity.affinity('E', 'Z')).toBe(0);
        expect(affinity.affinity('Z', 'Z')).toBe(0);
    });