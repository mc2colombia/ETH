const gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
sass = require('gulp-sass');
gulp.task('sass', ()=>
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
);

gulp.task('default', () => {
  gulp.watch('./sass/*.scss',['sass']);
});




