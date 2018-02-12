import coefMonthly from '../../dist/master/coefMonthly';

test(
  'Whether is `coefMonthly` function object.',
  () => expect(coefMonthly).toBeInstanceOf(Function),
);
test(
  'When a date is specified, it returns a coefficient.',
  () => {
    const dateA = new Date('1873-02-01');
    expect(coefMonthly(dateA)).toBeGreaterThanOrEqual(4);
    expect(coefMonthly(dateA)).toBeLessThanOrEqual(9);
    const dateB = new Date('2050-12-01');
    expect(coefMonthly(dateB)).toBeGreaterThanOrEqual(4);
    expect(coefMonthly(dateB)).toBeLessThanOrEqual(9);
  },
);
test(
  'Ignore difference in date.',
  () => {
    const dateA = new Date('1873-02-01');
    const dateB = new Date('1873-02-28');
    expect(coefMonthly(dateA)).toEqual(coefMonthly(dateB));
  },
);
test(
  'Date coefficients outside range cannot be acquired.',
  () => {
    const dateA = new Date('1873-01-01');
    const dateB = new Date('2051-01-01');
    expect(coefMonthly(dateA)).toBeNaN();
    expect(coefMonthly(dateB)).toBeNaN();
  },
);
