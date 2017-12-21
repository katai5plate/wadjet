'use strict';

const wadjet = require('../src');

test('is Function', () => expect(wadjet).toBeInstanceOf(Function));
test('Be truthy', () => expect(wadjet()).toBeTruthy());
test('situation A', () => {
    const result = wadjet('2007-08-31');
    const expected = {
        cycle: 4,
        lifeBase: 'Investment',
        potential: 'Io-Ei',
        workstyle: 'E001',
        inner: {
            communication: 'Fix',
            management: 'Hope',
            motivation: 'Competition',
            nature: 'E919',
            position: 'Quick',
            response: 'Action'
        },
        outer: {
            communication: 'Flex',
            management: 'Hope',
            motivation: 'Power',
            nature: 'A888',
            position: 'Quick',
            response: 'Action'
        }
    };
    expect(result).toEqual(expected);
});
test('situation B', () => {
    const result = wadjet('1981-10-12');
    const expected = {
        cycle: 10,
        lifeBase: 'Application',
        potential: 'Co-Ni',
        workstyle: 'E125',
        inner: {
            communication: 'Fix',
            management: 'Care',
            motivation: 'OwnMind',
            nature: 'E555',
            position: 'Direct',
            response: 'Mind'
        },
        outer: {
            communication: 'Flex',
            management: 'Care',
            motivation: 'Safety',
            nature: 'H789',
            position: 'Direct',
            response: 'Mind'
        }
    };
    expect(result).toEqual(expected);
});