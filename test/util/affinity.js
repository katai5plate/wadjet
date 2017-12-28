'use strict';

import affinity from '../../dist/util/affinity';

test(
    'Whether is `affinity` function object.',
    () => expect(affinity).toBeInstanceOf(Function));
test(
    'When comparing with the same value, returned 0',
    () => {
        expect(affinity('H', 'H')).toBe(0);
        expect(affinity('E', 'E')).toBe(0);
        expect(affinity('A', 'A')).toBe(0);
    });
test(
    'When comparing with the different value, returned 1 or -1',
    () => {
        expect(affinity('H', 'E')).toBe(1);
        expect(affinity('E', 'A')).toBe(1);
        expect(affinity('A', 'H')).toBe(1);
        expect(affinity('H', 'A')).toBe(-1);
        expect(affinity('A', 'E')).toBe(-1);
        expect(affinity('E', 'H')).toBe(-1);
    });
test(
    'When specified invalid value, returned 0',
    () => {
        expect(affinity('Z', 'H')).toBe(0);
        expect(affinity('E', 'Z')).toBe(0);
        expect(affinity('Z', 'Z')).toBe(0);
    });