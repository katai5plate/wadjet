'use strict';

import bizTeam from '../../dist/util/bizTeam';
import natureBiz from '../../dist/master/natureBiz';

test(
    'Whether is `bizTeam` function object.',
    () => expect(bizTeam).toBeInstanceOf(Function));

test(
    'Whether possible to obtain correct value corresponding to correct input: Pattern A',
    () => {
        for (const [key, value] of Object.entries(natureBiz)) {
            const result = bizTeam(value, key);
            expect(result).toBeInstanceOf(Object);
            expect(Object.keys(result).length).toEqual(4);
            for (const [k, v] of Object.entries(result)) {
                expect(k).toMatch(/^[A-Z]\w+/);
                expect(v).toMatch(/^[AEH]\d{3}/);
            }
        }
    });

test(
    'Whether possible to obtain correct value corresponding to correct input: Pattern B',
    () => {
        for (const [key, value] of Object.entries(natureBiz)) {
            const result = bizTeam(value, key, 'Direct');
            expect(result).toBeInstanceOf(Object);
            expect(Object.keys(result).length).toEqual(3);
            for (const [k, v] of Object.entries(result)) {
                expect(k).toMatch(/^[A-Z]\w+/);
                expect(v).toMatch(/^[AEH]\d{3}/);
            }
        }
    });