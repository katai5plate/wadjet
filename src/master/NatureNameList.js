const { natureNames } = require('../const.json');

const {
  arts: { prefix: A, type: typeA },
  education: { prefix: E, type: typeE },
  humanities: { prefix: H, type: typeH },
} = natureNames;

/**
 * 自然値リスト。
 * @type {ReadonlyArray<string>}
 */
module.exports = [
  ...typeA.map((t) => `${A}${t}`),
  ...typeE.map((t) => `${E}${t}`),
  ...typeH.map((t) => `${H}${t}`),
];
