'use strict';

import naturesDesc from './../../dist/master/naturesDesc';
import natures from './../../dist/enum/natures';

test(
    'Whether is `naturesDesc` general object.',
    () => expect(naturesDesc).toBeInstanceOf(Function));
test(
    'Whether possible to obtain correct value corresponding to correct input.',
    () => {
        for (let nature of natures) {
            const desc = naturesDesc(nature);
            expect(desc).toBeTruthy();
            expect(desc.communication).toBeTruthy();
            expect(desc.management).toBeTruthy();
            expect(desc.response).toBeTruthy();
            expect(desc.position).toBeTruthy();
            expect(desc.motivation).toBeTruthy();
            expect(desc.nature).toBeTruthy();
            expect(desc.nature).toBe(nature);
            expect(desc.business).toBeTruthy();
            expect(desc.romance).toBeTruthy();
        }
    });
test(
    'Whether possible to obtain empty value corresponding to incorrect input.',
    () => {
        const desc = naturesDesc('');
        expect(desc).toBeTruthy();
        expect(desc.communication).toBeFalsy();
        expect(desc.management).toBeFalsy();
        expect(desc.response).toBeFalsy();
        expect(desc.position).toBeFalsy();
        expect(desc.motivation).toBeFalsy();
        expect(desc.nature).toBeFalsy();
        expect(desc.business).toEqual({});
        expect(desc.romance).toEqual({});
    });