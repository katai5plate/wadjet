const {
  coefMonthlyRecord,
  lifeBaseNames,
  lifeBaseIndexes,
  lifeBaseCoefTable,
  coefNatures,
  coefPotentials,
  potentialNames,
  natureTypes,
} = require('./const.json');

/**
 * 指定した日付に対応する月間係数を検索します。
 * @param {Date} date Date information.
 * @return {number} coefficient.
 */
const coefMonthly = (date) =>
  coefMonthlyRecord[date.getFullYear()][date.getMonth()];

/**
 * テーブルへのアクセサーを取得します。
 * @param {string[]} label Label.
 * @param {number[][]} table Table.
 */
const tableXY = (label, table) => ({ x = 0, y = 0 } = {}) =>
  ((z) => z || '')(label[((r) => (r ? r[x] : undefined))(table[y])]);

const [
  /** 指定された月と係数に対応するライフベース */
  lifeBase,
  /** 指定された月と係数に対応する性質 */
  natures,
  /** 指定した月と係数に対応するポテンシャル */
  potential,
] = [
  tableXY(lifeBaseNames, lifeBaseIndexes),
  tableXY(natureTypes, coefNatures),
  tableXY(potentialNames, coefPotentials),
];

/**
 * 月、日、係数からライフベースファクターを取得します。
 * @param {number} month Month. (1-12)
 * @param {number} dcoef Coefficient of day.
 * @returns {number} Life-base factor.
 */
const lifeBaseCoef = (month, dcoef) =>
  ((r, d) =>
    !r
      ? Number.NaN
      : r.find((v) => d < (v.t === null ? Number.MAX_VALUE : v.t)).v)(
    lifeBaseCoefTable[month - 1],
    dcoef,
  );

/**
 * 入力から年、月、日付、日付の係数を作成します。
 * @param {Date|string} birth Birthday.
 * @return {Wadjet.CoefMonthly & {date: number}}
 * @throws {Error} When birthday was out of range.
 */
const ymd = (birth) => {
  const ld = typeof birth === 'string' ? new Date(birth) : birth;
  const dcoef = coefMonthly(ld);
  if (Number.isNaN(dcoef)) {
    throw new Error();
  }
  return {
    year: Math.floor(ld.getFullYear()),
    month: Math.floor(ld.getMonth() + 1),
    date: Math.floor(ld.getDate()),
    dcoef,
  };
};

/**
 * 自然と可能性の計算関数を生成します。
 * @param {number} cycle cycle coef.
 */
const naturePotential = (cycle) => {
  const code = (func, limit) => (v) =>
    func({ x: (v % limit || limit) - 1, y: cycle });
  return { mn: code(natures, 12), mp: code(potential, 10) };
};

/**
 * 誕生日から性格を取得します。
 * @param {Date|string} birth Birthday.
 *
 * It can be set from 1873-02-01 to 2050-12-31.
 * @returns {Wadjet.Personality} Personality.
 * @throws {Error} When birthday specified invalid value.
 */
const personality = (birth) => {
  const { year, month, date, dcoef } = ymd(birth);
  const yh = Math.floor(year * 0.01);
  const early = Math.floor(month <= 2);
  const icoef = month + early * 12;
  const inner = [
    5.25 * ((year % 100) - early),
    0.6 * (icoef + 1),
    4.25 * yh,
  ].reduce((p, c) => p + Math.floor(c), date + 1);
  const ge = date >= dcoef;
  const outer = (month - Math.floor(!ge) || 12) + 1;
  const ymb = year - (month === 2 && ge ? early : 0);
  const lbc = lifeBaseCoef(month, date - dcoef) - 1;
  const cycle = (inner + 6) % 10;
  const { mn, mp } = naturePotential(cycle);
  return {
    inner: mn(inner + yh * 4 + icoef * 6),
    outer: mn(outer),
    cycle: cycle || 10,
    lifeBase: lifeBase({ x: lbc, y: cycle }),
    potential: `${mp(ymb + 7)}-${mp(year * 2 + outer + 2)}`,
    workstyle: mn(ymb + 9),
  };
};

module.exports = personality;
