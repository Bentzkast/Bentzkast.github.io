const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  webpack = require('webpack');

// compile sass
gulp.task('sass', () => {
  return (
    gulp
      .src('./app/src/scss/styles.scss')
      //{ outputStyle: 'compressed' }
      .pipe(sass())
      .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('./app/dist/styles'))
      .pipe(browserSync.stream())
  );
});

// compile js
gulp.task('js', () => {
  webpack(require('./webpack.config'), (err, stats) => {
    if (err) console.log(err.toString());
    console.log(stats.toString());
  });
});

// watch and serve
gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: './'
  });

  // check if there are any change, if so compile and refresh
  gulp.watch(['./app/src/scss/**/*.scss'], ['sass']);
  gulp.watch(['./app/src/js/**/*.js'], ['js'], browserSync.reload);
  gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('imagemin', () => {
  gulp
    .src('./app/src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/dist/images'));
});

gulp.task('default', ['serve']);
