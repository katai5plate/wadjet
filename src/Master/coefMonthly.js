'use strict';

/** Monthly coefficient since Feb. 1873 and later. */
const record = [
    4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7, // Start at *Feb. 1873*
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 4,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 8, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 8, 8, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 8, 8, 8, 9, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 7, 6, 6, 7, 8, 9, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 9, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 5, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 9, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 9, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 9, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 5, 6, 7, 8, 8, 8, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 7, 6, 7, 6, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 7, 6, 6, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 6, 8, 8, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 7, 6, 7, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 9, 9, 9, 8, 8,
    7, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 7, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    7, 5, 8, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 9, 9, 8, 8,
    6, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8,
    6, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 6, 6, 7, 8, 8, 8, 9, 8, 8,
    6, 5, 5, 5, 5, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 8,
    6, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 6, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    5, 4, 5, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 5, 5, 6, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 7, 7,
    6, 5, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    5, 4, 6, 5, 5, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 9, 8, 7,
    6, 5, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 5, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 8, 8, 8, 8, 8, 7,
    6, 5, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 7,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 6, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 8, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 6, 6, 7, 8, 8, 8, 7, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 5, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 8, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 6, 5, 5, 6, 7, 7, 8, 8, 7, 7,
    6, 4, 5, 4, 5, 5, 6, 7, 7, 7, 7, 6,
    5, 3, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
    5, 4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7,
];

/**
 * Iterator function for generating monthly coefficient and
 * year / month information pair.
 */
function* iter() {
    let date = new Date('1873-01-01');
    for (let dcof of record) {
        date.setMonth(date.getMonth() + 1);
        yield {
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            dcof,
        };
    }
}

/**
 * Pairs of _year / month_ information and _monthly coefficient_.
 * 
 * Since it can be supposed that often specified on dates
 * after the late 20th century, the list is reversed order
 * for performance improvement.
 */
const table = [...iter()].reverse();

/**
 * Search monthly coefficient corresponding to the specified date.
 *
 * Returns an `undefined` when it did not exist.
 * 
 * @param {Date} date Date information.
 *
 * It can be set from 1873-02-01 to 2050-12-31.
 * Ignoring that information other than year / month.
 * @returns {number} Monthly coefficient.
 */
export default (date = new Date()) => {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const result =
        table.find(({ month, year }) => month === m && year === y);
    return result ? result.dcof : Number.NaN;
};