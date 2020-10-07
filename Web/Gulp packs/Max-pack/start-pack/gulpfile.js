//функция src - получает файл(ы)
//функция dest - выгружает файл(ы)


const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');

//будем использовать стрелочный вид функций JS

//Функция обработки стилей
const styles = () => {
    return src('./src/scss/**/*.scss')   //возвращаем значение. функция src получает какой-то файл(ы) которые нужно обработать.
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(dest('./app/css/'))

}

exports.styles = styles;