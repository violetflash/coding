const gulp = require('gulp')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const rename = require("gulp-rename")
const fileinclude = require("gulp-file-include")
const uglify = require("gulp-uglify")


module.exports = function js() {
  return gulp.src('src/js/main.js')
    //сборка файлов через fileinclude
    .pipe(fileinclude())
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
}
