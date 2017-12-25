'use strict';

import lifeBaseCoef from '../../dist/master/lifeBaseCoef';

test(
    'Whether is `lifeBaseCoef` function object.',
    () => expect(lifeBaseCoef).toBeInstanceOf(Function));
test(
    'Whether possible to obtain correct value corresponding to correct input.',
    () => {
        const params = [
            { month: 1, dcoef: 0 },
            { month: 12, dcoef: 0 },
            { month: 1, dcoef: -100 },
            { month: 12, dcoef: -100 },
            { month: 1, dcoef: 100 },
            { month: 12, dcoef: 100 },
        ];
        for (let p of params) {
            const lbc = lifeBaseCoef(p);
            expect(lbc).toBeGreaterThanOrEqual(1);
            expect(lbc).toBeLessThanOrEqual(10);
        }
    });
test(
    'When a month is outside range, it returns a NaN.',
    () => {
        const params = [
            { month: 0, dcoef: 0 },
            { month: 13, dcoef: 0 },
            { month: 0, dcoef: -100 },
            { month: 13, dcoef: -100 },
            { month: 0, dcoef: 100 },
            { month: 13, dcoef: 100 },
        ];
        for (let p of params) { expect(lifeBaseCoef(p)).toBeNaN(); }
    });