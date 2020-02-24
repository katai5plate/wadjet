/* eslint-disable no-bitwise */
const source = require('../src');
const origin = require('wadjet').default;

describe('personality, detail', () => {
  it('random x 100', () => {
    new Array(100).fill(0).forEach(() => {
      const y = Math.floor(1873 + Math.random() * 177);
      const m = `${Math.floor(1 + Math.random() * 12)}`.padStart(2, '0');
      const d = `${Math.floor(1 + Math.random() * 28)}`.padStart(2, '0');
      const ymd = new Date(`${y}-${m}-${d}`);
      const res = [source.personality(ymd), origin.personality(ymd)];
      expect(res[0]).toEqual(res[1]);
      const inner = [source.detail(res[0].inner), origin.detail(res[1].inner)];
      expect(inner[0]).toEqual(inner[1]);
      const team = [
        source.detail(inner[0].business, res[0].inner, inner[0].position),
        origin.detail(inner[1].business, res[1].inner, inner[1].position),
      ];
      expect(team[0]).toEqual(team[1]);
    });
  });
});
