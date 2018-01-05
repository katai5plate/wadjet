'use strict';

import './type';

/**
 * Brain values list.
 * @type {ReadonlyArray<Wadjet.Brain>}
 */
export const brain = Object.freeze(['Left', 'Right']);

/**
 * Communication values list.
 * @type {ReadonlyArray<Wadjet.Communication>}
 */
export const communication = Object.freeze(['Fix', 'Flex']);

/**
 * Life base values list.
 * @type {ReadonlyArray<Wadjet.LifeBase>}
 */
export const lifeBase =
    Object.freeze([
        'Application',
        'Association',
        'Development',
        'Expression',
        'Finance',
        'Investment',
        'Organization',
        'Quest',
        'SelfMind',
        'SelfReliance',
    ]);

/**
 * Management values list.
 * @type {ReadonlyArray<Wadjet.Management>}
 */
export const management = Object.freeze(['Care', 'Hope']);

/**
 * Motivation values list.
 * @type {ReadonlyArray<Wadjet.Motivation>}
 */
export const motivation =
    Object.freeze([
        'Competition', 'OwnMind', 'Power', 'Safety', 'SkillUp', 'Status',
    ]);

/**
 * Natures values list.
 * @type {ReadonlyArray<Wadjet.Nature>}
 */
export const nature =
    Object.freeze([
        'A000',
        'A024',
        'A100',
        'A888',
        'E001',
        'E125',
        'E555',
        'E919',
        'H012',
        'H025',
        'H108',
        'H789',
    ]);

/**
 * Position values list.
 * @type {ReadonlyArray<Wadjet.Position>}
 */
export const position =
    Object.freeze(['Adjust', 'Brain', 'Direct', 'Quick']);

/**
 * Potential values list.
 * @type {ReadonlyArray<Wadjet.Potential>}
 */
export const potential =
    Object.freeze([
        'Ci', 'Co', 'Ei', 'Eo', 'Fi', 'Fo', 'Ii', 'Io', 'Ni', 'No'
    ]);

/**
 * Response values list.
 * @type {ReadonlyArray<Wadjet.Response>}
 */
export const response = Object.freeze(['Action', 'Mind']);