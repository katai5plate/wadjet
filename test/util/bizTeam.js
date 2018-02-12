import bizTeam from '../../dist/util/bizTeam';
import natureBiz from '../../dist/master/natureBiz';

test(
  'Whether is `bizTeam` function object.',
  () => expect(bizTeam).toBeInstanceOf(Function),
);

test(
  'Whether possible to obtain correct value corresponding to correct input: Pattern A',
  () => {
    Object.entries(natureBiz).forEach(([key, value]) => {
      const result = bizTeam(value, key);
      expect(result).toBeInstanceOf(Object);
      expect(Object.keys(result).length).toEqual(4);
      Object.entries(result).forEach(([k, v]) => {
        expect(k).toMatch(/^[A-Z]\w+/);
        expect(v).toMatch(/^[AEH]\d{3}/);
      });
    });
  },
);

test(
  'Whether possible to obtain correct value corresponding to correct input: Pattern B',
  () => {
    Object.entries(natureBiz).forEach(([key, value]) => {
      const result = bizTeam(value, key, 'Direct');
      expect(result).toBeInstanceOf(Object);
      expect(Object.keys(result).length).toEqual(3);
      Object.entries(result).forEach(([k, v]) => {
        expect(k).toMatch(/^[A-Z]\w+/);
        expect(v).toMatch(/^[AEH]\d{3}/);
      });
    });
  },
);
