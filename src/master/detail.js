const NatureNameList = require('./NatureNameList');

const {
  natureNames,
  natureBusinessMap,
  natureRomanceMap,
  natureDetailMap,
  communicationNames,
  managementNames,
  responseNames,
  positionNames,
  motivationNames,
  brainNames,
} = require('../const.json');

const {
  arts: { prefix: A, type: typeA },
  education: { prefix: E, type: typeE },
  humanities: { prefix: H, type: typeH },
} = natureNames;

/**
 * 自然値リスト。
 * @type {ReadonlyArray<string>}
 */
const nature = [
  ...typeA.map((t) => `${A}${t}`),
  ...typeE.map((t) => `${E}${t}`),
  ...typeH.map((t) => `${H}${t}`),
];

/**
 * 指定されたテーブルで自然マップを生成します。
 * @param {number[][]} table Values table.
 * @returns {Wadjet.NatureAffinityMap} Personality map.
 */
const natureMap = (table) =>
  table
    .map((r, ri) => ({
      [NatureNameList[ri]]: r
        .map((v, vi) => ({ [NatureNameList[vi]]: v }))
        .reduce((p, c) => ({ ...p, ...c }), {}),
    }))
    .reduce((p, c) => ({ ...p, ...c }), {});

/** 優れたビジネス形成レベルの表。 */
const business = natureMap(natureBusinessMap);

/** ロマンス形成レベル表。 */
const romance = natureMap(natureRomanceMap);

/**
 * 説明データ行を生成します。
 * @param {number[]} row row values.
 */
const generate = (...row) => ({
  /**
   * 通信値リスト。
   */
  communication: communicationNames[row[0]] || '',
  /**
   * 管理値リスト。
   */
  management: managementNames[row[1]] || '',
  /**
   * 応答値リスト。
   */
  response: responseNames[row[2]] || '',
  /**
   * 位置値リスト。
   */
  position: positionNames[row[3]] || '',
  /**
   * モチベーション値のリスト。
   */
  motivation: motivationNames[row[4]] || '',
  /**
   * 脳の値リスト。
   * @type {ReadonlyArray<Wadjet.Brain>}
   */
  brain: brainNames[row[5]] || '',
  romance: romance[nature[row[6]]] || {},
  business: business[nature[row[6]]] || {},
});

/**
 * キーが見つからなかった場合のデフォルト値。
 * @type {Wadjet.NatureDetail}
 */
const unknown = generate(-1, -1, -1, -1, -1, -1);

/**
 * 性質記述データのマップ。
 * @type {Map<string, Wadjet.NatureDetail>}
 */
const map = new Map(
  natureDetailMap.map((value, index) => [
    nature[index],
    generate(...value, index),
  ]),
);

/**
 * 指定された性質に対応する詳細を取得します。
 * @param {string} key Nature key.
 * @returns {Wadjet.NatureDetail} Detail.
 */
const detail = (key) => ({ ...(map.get(key) || unknown) });

module.exports = detail;
