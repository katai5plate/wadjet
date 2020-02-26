const createComparator = require('./util/affinity');
const personality = require('./util/personality');

const { natureDetails, natureTypes } = require('./const.json');

/**
 * 指定された性質に対応する詳細を取得します。
 * @param {string} key Nature key.
 * @returns {Wadjet.NatureDetail} Detail.
 */
const detail = (key) => natureDetails[key];

/**
 * チームに最適なアフィニティの性格タイプのリストを作成します。
 * @param {Wadjet.NatureAffinity} business 良好なビジネス形成レベル。
 * @param {string} personalType 性格タイプ。
 * @param {Wadjet.Position} [position] Position type.
 * @returns {Object.<string, string>} 性格タイプのリスト。
 */
const bizTeam = (business, personalType, position) => {
  const map = Object.entries(business).map(([type, pri]) => ({
    type,
    pri,
    pos: detail(type).position,
  }));
  const comparator = createComparator(personalType);
  // NOTE: sort（）関数は破壊的な変更を実行します。
  // 戻り値は環境に依存します。
  map.sort(({ pri: pa, type: ta }, { pri: pb, type: tb }) =>
    pa !== pb ? -(pa - pb) : comparator(ta, tb),
  );
  const result = map.reduce(
    (p, { pos, type }) =>
      pos === position || pos in p ? p : { ...p, [pos]: type },
    {},
  );
  return result;
};

module.exports = Object.freeze({
  /**
   * チームに最適なアフィニティの性格タイプのリストを作成します。
   * @param {Wadjet.NatureAffinity} business Good business formation levels.
   * @param {string} personality Personality type.
   * @param {Wadjet.Position} [position] Position type.
   * @returns {Object.<string, string>} Personality types list.
   */
  bizTeam,
  /**
   * アフィニティ順のソートに使用される評価関数を作成します。
   * @param {string} type Personality type.
   * @returns {Wadjet.Comparator} Comparator function.
   */
  comparator: createComparator,
  /**
   * 指定された性質に対応する詳細を取得します。
   * @param {string} key Nature key.
   * @returns {Wadjet.NatureDetail} Detail.
   */
  detail,
  /**
   * 誕生日から性格を取得します。
   * @param {Date|string} birth Birthday.
   *
   * 1873-02-01から2050-12-31まで設定できます。
   * @returns {Wadjet.Personality} Personality.
   * @throws {Error} When birthday specified invalid value.
   */
  personality,
  /**
   * 自然値リスト。
   * @type {ReadonlyArray<string>}
   */
  types: natureTypes,
});
