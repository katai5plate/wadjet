'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var debug = require('gulp-debug');
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
        'plugins': ['transform-runtime']
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

function babelPipe(from, to, rc) {
    return gulp
        .src('./' + from + '/**/*.js')
        .pipe(plumber())
        .pipe(babel(rc))
        .pipe(gulp.dest('./' + to));
}

gulp.task('babelDist', function () {
    babelPipe('src', 'dist', babelrcDist);
});

gulp.task('babelDistVerbose', function () {
    babelPipe('src', 'dist', babelrcDist).pipe(debug());
});

gulp.task('babelTest', function () {
    babelPipe('test', '__tests__', babelrcTest);
});

gulp.task('babelTestVerbose', function () {
    babelPipe('test', '__tests__', babelrcTest).pipe(debug());
});

gulp.task('jest', ['babelDist', 'babelTest'], function () {
    process.env.NODE_ENV = 'test';
    gulp
        .src('__tests__')
        .pipe(plumber())
        // If task does not wait here, tests may start
        // before the export finishes and it may fail.
        .pipe(wait(1000))
        .pipe(jest(jestrc));
});

gulp.task('watch_src', function () {
    gulp.watch('./src/**/*.js', ['babelDist', 'jest']);
});

gulp.task('watch_test', function () {
    gulp.watch('./test/**/*.js', ['babelTest', 'jest']);
});

gulp.task(
    'default', [
        'babelDist', 'babelTest', 'jest', 'watch_src', 'watch_test'
    ]);