'use strict';

import naturesDesc from '../master/naturesDesc';

import personality from './personality';

/**
 * Get personality from birthday.
 * @param {Date|string} birth Birthday.
 * 
 * It can be set from 1873-02-01 to 2050-12-31.
 * @throws {Error} When birthday specified invalid value.
 * @deprecated This function is DEPRECATED since version 3.2.0. And will no longer since version 4.0.0.
 * 
 * Use `personality` function.
 */
const calculator_deprecated =
    birth => {
        console.warn(
            'This function is DEPRECATED since version 3.2.0. And will no longer since version 4.0.0. Use `personality` function.'
        );
        const { inner, outer, ...result } = personality(birth);
        return {
            inner: naturesDesc(inner),
            outer: naturesDesc(outer),
            ...result
        };
    };

export default calculator_deprecated;