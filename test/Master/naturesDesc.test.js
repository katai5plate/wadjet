'use strict';

const naturesDesc = require('../../src/Master/naturesDesc');

test(
    'Whether is `naturesDesc` general object.',
    () => expect(naturesDesc).toBeInstanceOf(Function));