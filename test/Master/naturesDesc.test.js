'use strict';

const naturesDesc = require('../../src/Master/naturesDesc');

test(
    'Whether is `naturesDesc` general object.',
    () => expect(naturesDesc).toBeInstanceOf(Object));
test(
    'Whether is `naturesDesc` general object.',
    () => {
        const keys = Object.keys(naturesDesc);
        expect(keys).toHaveLength(12);
        expect(naturesDesc).toHaveProperty('A000');
    });