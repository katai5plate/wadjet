'use strict';

import calculator_deprecated from '../../dist/util/calculator_deprecated';

test('is Function', () => expect(calculator_deprecated).toBeInstanceOf(Function));
test('situation A', () => {
    const result = calculator_deprecated('2007-08-31');
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
            response: 'Action',
            business: {
                A000: 2,
                A024: 0,
                A100: 0,
                A888: 3,
                E001: 2,
                E125: 2,
                E555: 2,
                E919: 0,
                H012: 1,
                H025: 0,
                H108: 3,
                H789: 3,
            },
            romance: {
                A000: 2,
                A024: 0,
                A100: 0,
                A888: 1,
                E001: 1,
                E125: 2,
                E555: 0,
                E919: 3,
                H012: 3,
                H025: 1,
                H108: 2,
                H789: 1,
            },
        },
        outer: {
            communication: 'Flex',
            management: 'Hope',
            motivation: 'Power',
            nature: 'A888',
            position: 'Quick',
            response: 'Action',
            business: {
                A000: 0,
                A024: 1,
                A100: 2,
                A888: 2,
                E001: 1,
                E125: 1,
                E555: 0,
                E919: 0,
                H012: 3,
                H025: 1,
                H108: 2,
                H789: 0,
            },
            romance: {
                A000: 1,
                A024: 3,
                A100: 1,
                A888: 0,
                E001: 0,
                E125: 0,
                E555: 0,
                E919: 1,
                H012: 0,
                H025: 0,
                H108: 3,
                H789: 2,
            },
        }
    };
    expect(result).toEqual(expected);
});
test('situation B', () => {
    const result = calculator_deprecated('1956-02-26');
    const expected = {
        cycle: 10,
        lifeBase: 'Development',
        potential: 'Eo-Ci',
        workstyle: 'H025',
        inner: {
            communication: 'Fix',
            management: 'Care',
            motivation: 'OwnMind',
            nature: 'E555',
            position: 'Direct',
            response: 'Mind',
            business: {
                A000: 1,
                A024: 3,
                A100: 3,
                A888: 0,
                E001: 1,
                E125: 1,
                E555: 3,
                E919: 0,
                H012: 0,
                H025: 1,
                H108: 0,
                H789: 2,
            },
            romance: {
                A000: 1,
                A024: 0,
                A100: 3,
                A888: 2,
                E001: 0,
                E125: 2,
                E555: 2,
                E919: 0,
                H012: 2,
                H025: 3,
                H108: 1,
                H789: 3,
            },
        },
        outer: {
            communication: 'Flex',
            management: 'Hope',
            motivation: 'Power',
            nature: 'A888',
            position: 'Quick',
            response: 'Action',
            business: {
                A000: 0,
                A024: 1,
                A100: 2,
                A888: 2,
                E001: 1,
                E125: 1,
                E555: 0,
                E919: 0,
                H012: 3,
                H025: 1,
                H108: 2,
                H789: 0,
            },
            romance: {
                A000: 1,
                A024: 3,
                A100: 1,
                A888: 0,
                E001: 0,
                E125: 0,
                E555: 0,
                E919: 1,
                H012: 0,
                H025: 0,
                H108: 3,
                H789: 2,
            },
        }
    };
    expect(result).toEqual(expected);
});
test('situation C', () => {
    const result = calculator_deprecated('1993-01-29');
    const expected = {
        cycle: 7,
        lifeBase: 'Quest',
        potential: 'Ei-Ei',
        workstyle: 'E555',
        inner: {
            communication: 'Flex',
            management: 'Care',
            motivation: 'Safety',
            nature: 'H789',
            position: 'Direct',
            response: 'Mind',
            business: {
                A000: 3,
                A024: 0,
                A100: 1,
                A888: 2,
                E001: 2,
                E125: 2,
                E555: 2,
                E919: 3,
                H012: 0,
                H025: 0,
                H108: 0,
                H789: 0,
            },
            romance: {
                A000: 1,
                A024: 1,
                A100: 1,
                A888: 1,
                E001: 2,
                E125: 3,
                E555: 3,
                E919: 1,
                H012: 0,
                H025: 0,
                H108: 1,
                H789: 2,
            },
        },
        outer: {
            communication: 'Fix',
            management: 'Care',
            motivation: 'SkillUp',
            nature: 'H025',
            position: 'Adjust',
            response: 'Action',
            business: {
                A000: 0,
                A024: 3,
                A100: 0,
                A888: 0,
                E001: 2,
                E125: 0,
                E555: 1,
                E919: 0,
                H012: 2,
                H025: 3,
                H108: 2,
                H789: 0,
            },
            romance: {
                A000: 0,
                A024: 3,
                A100: 0,
                A888: 0,
                E001: 3,
                E125: 0,
                E555: 2,
                E919: 0,
                H012: 0,
                H025: 2,
                H108: 2,
                H789: 3,
            },
        }
    };
    expect(result).toEqual(expected);
});
test('Out of range', () => {
    const result = calculator_deprecated('1981-10-12');
    expect(() => calculator_deprecated('1873-01-31')).toThrowError();
    expect(() => calculator_deprecated('2051-01-01')).toThrowError();
    expect(calculator_deprecated('1873-02-01')).toBeTruthy();
    expect(calculator_deprecated('2050-12-31')).toBeTruthy();
});