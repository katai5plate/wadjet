/**
 * Affinity level.
 * @typedef {0|1|2|3} Wadjet.Level
 */

/** @typedef {'Left'|'Right'} Wadjet.Brain */

/** @typedef {'Fix'|'Flex'} Wadjet.Communication */

/** @typedef {'Care'|'Hope'} Wadjet.Management */

/**
 * @typedef {'Competition'|'OwnMind'|'Power'|'Safety'|'SkillUp'|'Status'} Wadjet.Motivation
 */

/** @typedef {'Adjust'|'Brain'|'Direct'|'Quick'} Wadjet.Position */

/**
 * @typedef {'Ci'|'Co'|'Ei'|'Eo'|'Fi'|'Fo'|'Ii'|'Io'|'Ni'|'No'} Wadjet.Potential
 */

/** @typedef {'Action'|'Mind'} Wadjet.Response */

/** @typedef {'A'|'E'|'H'} Wadjet.NatureVector */

/**
 * @typedef {object} Wadjet.CoefMonthly
 * @property {number} dcoef Monthly coefficient.
 * @property {number} month Month.
 * @property {number} year Year.
 */

/**
 * @typedef {object} Wadjet.LifeBaseCoef
 * @property {number} t Threshold.
 * @property {number} v Value.
 */

/**
 * @typedef {object} Wadjet.NatureAffinity
 * @property {Wadjet.Level} A000 Affinity with this personality type.
 * @property {Wadjet.Level} A024 Affinity with this personality type.
 * @property {Wadjet.Level} A100 Affinity with this personality type.
 * @property {Wadjet.Level} A888 Affinity with this personality type.
 * @property {Wadjet.Level} E001 Affinity with this personality type.
 * @property {Wadjet.Level} E125 Affinity with this personality type.
 * @property {Wadjet.Level} E555 Affinity with this personality type.
 * @property {Wadjet.Level} E919 Affinity with this personality type.
 * @property {Wadjet.Level} H012 Affinity with this personality type.
 * @property {Wadjet.Level} H025 Affinity with this personality type.
 * @property {Wadjet.Level} H108 Affinity with this personality type.
 * @property {Wadjet.Level} H789 Affinity with this personality type.
 */

/**
 * @typedef {object} Wadjet.NatureAffinityMap
 * @property {Wadjet.NatureAffinity} A000 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} A024 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} A100 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} A888 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} E001 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} E125 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} E555 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} E919 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} H012 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} H025 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} H108 Affinity with this personality type.
 * @property {Wadjet.NatureAffinity} H789 Affinity with this personality type.
 */

/**
 * @typedef {object} Wadjet.NatureDetail
 * @property {Wadjet.Brain} brain brain type.
 * @property {Wadjet.Communication} communication Communication type.
 * @property {Wadjet.Management} management Management type.
 * @property {Wadjet.Motivation} motivation Motivation type.
 * @property {Wadjet.Position} position Position type.
 * @property {Wadjet.Response} response Response type.
 * @property {Wadjet.NatureAffinity} business Affinity in business with this personality type.
 * @property {Wadjet.NatureAffinity} romance Affinity in romance with this personality type.
 */

/**
 * @typedef {object} Wadjet.Personality
 * @property {number} cycle Cycle.
 * @property {string} inner Inner personality type.
 * @property {string} lifeBase LifeBase type.
 * @property {string} outer Outer personality type.
 * @property {Wadjet.Potential} potential Potential type.
 * @property {string} workstyle Personality type when concentrated.
 */

/**
 * @callback Wadjet.Comparator
 * @param {string} a Personality type.
 * @param {string} b Personality type.
 * @returns {-1|0|1} Comparison result.
 */
