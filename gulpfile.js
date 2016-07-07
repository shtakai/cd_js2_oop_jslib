var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('watch', function(){
  gulp.watch(['test/**/*', 'lib/**/*'],['mocha']);
});

gulp.task('mocha', function(){
  return gulp.src(['test/*.js'], { read: false })
    .pipe(mocha({reporter: 'list'}))
  .on('error', gutil.log);
});
