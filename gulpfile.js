var gulp = require('gulp'),
    server = require('browser-sync'),
    browserSync = require('browser-sync').create(),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    clean = require('gulp-clean');

gulp.task('less', function() {
  return gulp.src('./app/less/main.less')
      .pipe(plumber({
        errorHandler: notify.onError(function(err){
          return {
            title: 'Styles',
            message: err.message
          }
        })
      }))
      .pipe(less())
      .pipe(gulp.dest("./app/css"))
      .pipe(browserSync.stream());
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('server', ['less'], function() {
  browserSync.init({
    server: {baseDir: './app/'}
  });
  gulp.watch('./app/**/*.html').on("change", browserSync.reload)
  gulp.watch('./app/less/**/*.less', ['less'], ['clean']);
  // gulp.watch("./app/**/*.js").on("change", browserSync.reload);
});

gulp.task('default', ['server', 'clean']);
