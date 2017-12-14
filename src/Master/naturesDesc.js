'use strict';

/** Communication values list. */
const communication = ['Fix', 'Flex'];

/** Management values list. */
const management = ['Care', 'Hope'];

/** Response values list. */
const response = ['Action', 'Mind'];

/** Position values list. */
const position = ['Adjust', 'Brain', 'Direct', 'Quick'];

/** Motivation values list. */
const motivation = [
    'Competition', 'OwnMind', 'Power', 'Safety', 'SkillUp', 'Status',
];

/**
 * Generate description data row.
 * @param {number[]} row row values.
 */
const generate = (...row) =>
    Object.freeze({
        communication: communication[row[0]],
        management: management[row[1]],
        response: response[row[2]],
        position: position[row[3]],
        motivation: motivation[row[4]],
    })

/** Natures description. */
module.exports =
    Object.freeze({
        A000: generate(1, 1, 1, 1, 5),
        A024: generate(1, 0, 0, 0, 2),
        A100: generate(1, 0, 1, 2, 5),
        A888: generate(1, 1, 0, 3, 2),
        E001: generate(0, 1, 1, 1, 1),
        E125: generate(0, 0, 0, 0, 0),
        E555: generate(0, 0, 1, 2, 1),
        E919: generate(0, 1, 0, 3, 0),
        H012: generate(0, 1, 0, 3, 4),
        H025: generate(0, 0, 0, 0, 4),
        H108: generate(1, 1, 1, 1, 3),
        H789: generate(1, 0, 1, 2, 3),
    });