'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jest = require('gulp-jest').default;
var plumber = require('gulp-plumber');
var wait = require('gulp-wait');
var jestrc = require('./package.json').jest;

function babelrc(targets) {
    return {
        'presets': [
            'stage-3', [
                'env', {
                    'targets': targets
                }
            ]
        ],
        'plugins': ['babel-plugin-root-import'],
    };
}

var babelrcDist =
    babelrc({
        'android': '4.4.3',
        'ie': '11',
        'firefox': '52',
        'node': '4.8.7'
    });

var babelrcTest = babelrc({ 'node': 'current' });

gulp.task('babelDist', function () {
    gulp
        .src('./src/**/*.js')
        .pipe(plumber())
        .pipe(babel(babelrcDist))
        .pipe(gulp.dest('./dist'));
});

gulp.task('babelTest', function () {
    gulp
        .src('./test/**/*.js')
        .pipe(plumber())
        .pipe(babel(babelrcTest))
        .pipe(gulp.dest('./__tests__'));
});

gulp.task('jest', ['babelDist', 'babelTest'], function () {
    process.env.NODE_ENV = 'test';
    gulp
        .src('__tests__')
        .pipe(plumber())
        .pipe(wait(1000))
        .pipe(jest(jestrc));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js'], ['babelDist', 'jest']);
    gulp.watch(['./test/**/*.js'], ['babelTest', 'jest']);
});

gulp.task('default', ['babelDist', 'babelTest', 'jest', 'watch']);