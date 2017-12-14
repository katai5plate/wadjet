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

const potential = {
    Ci: 'Ci',
    Co: 'Co',
    Ei: 'Ei',
    Eo: 'Eo',
    Fi: 'Fi',
    Fo: 'Fo',
    Ii: 'Ii',
    Io: 'Io',
    Ni: 'Ni',
    No: 'No',
};

const communication = { Fix: 'Fix', Flex: 'Flex' };

const management = { Care: 'Care', Hope: 'Hope' };

const response = { Action: 'Action', Mind: 'Mind' };

class Nature {
    communication = '';
    motivation = '';
    management = '';
    nature = '';
    position = '';
    response = '';

    /** Initialize this instance. */
    constructor({
        communication = '',
        motivation = '',
        management = '',
        nature = '',
        position = '',
        response = '',
    }) {
        this.communication = communication;
        this.motivation = motivation;
        this.management = management;
        this.nature = nature;
        this.position = position;
        this.response = response;
    }
}

class Result {
    birthday = '';
    lifebase = '';
    potential = '';
    workstyle = '';
    inner = new Nature();
    outer = new Nature();
}