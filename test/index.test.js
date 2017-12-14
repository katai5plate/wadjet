'use strict';

const wadjet = require('../src');

test('is Function', () => expect(wadjet).toBeInstanceOf(Function));
test('Be truthy', () => expect(wadjet()).toBeTruthy());
test('Be truthy', () => {
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