//функция src - получает файл(ы)
//функция dest - выгружает файл(ы)


const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const clean_css = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const fileInclude = require('gulp-file-include')

//будем использовать стрелочный вид функций JS

//Функция обработки стилей
//sourcemap, rename, autoprefixer, clean-css, browser-sync
const styles = () => {
    return src('./src/scss/**/*.scss')   //возвращаем значение. функция src получает какой-то файл(ы) которые нужно обработать.
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                //формирование развернутого (не сжатого) css файла
                outputStyle: 'expanded'
            }).on('error', notify.onError()))
        .pipe(
            rename({
                extname: '.min.css'
            }))
        .pipe(
            autoprefixer({
                cascade: false
            }))
        .pipe(
            clean_css({
                compatibility: "ie8",
                level: {
                    1: {
                        specialComments: 0,
                        removeEmpty: true,
                        removeWhitespace: true,
                    },
                    2: {
                        mergeMedia: true,
                        removeEmpty: true,
                        removeDuplicateFontRules: true,
                        removeDuplicateMediaBlocks: true,
                        removeDuplicateRules: true,
                        removeUnusedAtRules: true,
                    },
                },
            }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/css/'))
        .pipe(browserSync.stream());
}

const htmlInclude = () => {
    return src(['./src/index.html'])
        .pipe(fileInclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./app'))
        .pipe(browserSync.stream());
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    watch('./src/scss/**/*.scss', styles);
    watch('./src/index.html', htmlInclude);
}

exports.styles = styles;
exports.watchFiles = watchFiles;