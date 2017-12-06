'use strict';

const natureCategory = Object.freeze({ A: 'A', E: 'E', H: 'H' });
const nature = {
    A000: 'A000',
    A024: 'A024',
    A100: 'A100',
    A888: 'A888',
    E001: 'E001',
    E125: 'E125',
    E555: 'E555',
    E919: 'E919',
    H012: 'H012',
    H025: 'H025',
    H108: 'H108',
    H789: 'H789',
    };
const potential =
    () => {
        const io = ['i', 'o'];
        return ['C', 'E', 'F', 'I', 'N'].map(a => io.map(b => a + b));
    };
