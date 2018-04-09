const gulp = require('gulp');
const babel = require('gulp-babel');
const debug = require('gulp-debug');
const jest = require('gulp-jest').default;
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const wait = require('gulp-wait');

const jestrc = require('./package.json').jest;

function babelrc(targets) {
  return {
    presets: ['stage-3', ['env', { targets }]],
    plugins: ['transform-runtime'],
  };
}

const babelrcDist =
  babelrc({
    browsers: [
      '> 1%',
      'Firefox ESR',
      'Last 2 Chrome versions',
      'Last 2 ChromeAndroid versions',
      'Last 2 Edge versions',
      'Last 1 Explorer versions',
      'Last 2 FirefoxAndroid versions',
      'Last 2 iOS versions',
      'Last 1 OperaMini versions',
      'Last 2 Safari versions',
      'Last 2 Samsung versions',
      'Last 2 UCAndroid versions',
    ],
    node: '6.14.1',
  });

const babelrcTest = babelrc({ node: 'current' });

function babelPipe(from, to, rc) {
  return gulp
    .src(`./${from}/**/*.js`)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(babel(rc))
    .pipe(gulp.dest(`./${to}`));
}

gulp.task('babelDist', () => {
  babelPipe('src', 'dist', babelrcDist);
});

gulp.task('babelDistVerbose', () => {
  babelPipe('src', 'dist', babelrcDist).pipe(debug());
});

gulp.task('babelTest', () => {
  babelPipe('test', '__tests__', babelrcTest);
});

gulp.task('babelTestVerbose', () => {
  babelPipe('test', '__tests__', babelrcTest).pipe(debug());
});

gulp.task('jest', ['babelDist', 'babelTest'], () => {
  process.env.NODE_ENV = 'test';
  gulp
    .src('__tests__')
    .pipe(plumber())
    // If task does not wait here, tests may start
    // before the export finishes and it may fail.
    .pipe(wait(1000))
    .pipe(jest(jestrc));
});

gulp.task('watch_src', () => {
  gulp.watch('./src/**/*.js', ['babelDist', 'jest']);
});

gulp.task('watch_test', () => {
  gulp.watch('./test/**/*.js', ['babelTest', 'jest']);
});

gulp.task('default', [
  'babelDist', 'babelTest', 'jest', 'watch_src', 'watch_test',
]);
