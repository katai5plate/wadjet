import personality from '../../dist/util/personality';

test('is Function', () => expect(personality).toBeInstanceOf(Function));
test(
  'situation A',
  () => {
    const result = personality('2007-08-31');
    const expected = {
      cycle: 4,
      lifeBase: 'Investment',
      potential: 'Io-Ei',
      workstyle: 'E001',
      inner: 'E919',
      outer: 'A888',
    };
    expect(result).toEqual(expected);
  },
);
test(
  'situation B',
  () => {
    const result = personality('1956-02-26');
    const expected = {
      cycle: 10,
      lifeBase: 'Development',
      potential: 'Eo-Ci',
      workstyle: 'H025',
      inner: 'E555',
      outer: 'A888',
    };
    expect(result).toEqual(expected);
  },
);
test(
  'situation C',
  () => {
    const result = personality('1993-01-29');
    const expected = {
      cycle: 7,
      inner: 'H789',
      lifeBase: 'Quest',
      potential: 'Ei-Ei',
      workstyle: 'E555',
      outer: 'H025',
    };
    expect(result).toEqual(expected);
  },
);
test(
  'Besides character strings, it also supports Date type.',
  () => {
    expect(personality('1993-01-29')).toEqual(personality(new Date('1993-01-29')));
  },
);
test(
  'If you specify a value outside the range, throw an exception.',
  () => {
    expect(() => personality('1873-01-31')).toThrowError();
    expect(() => personality('2051-01-01')).toThrowError();
    expect(() => personality('')).toThrowError();
    expect(personality('1873-02-01')).toBeTruthy();
    expect(personality('2050-12-31')).toBeTruthy();
  },
);
