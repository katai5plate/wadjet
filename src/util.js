'use strict';

export const replace0 = (value = 0, replace = 1) => value || replace;
export const mod0 = (value = 0, mod = 1) => replace0(value % mod, mod);