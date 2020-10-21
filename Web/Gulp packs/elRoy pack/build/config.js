//флаг --save-dev нужен для того, чтобы сохранялись версии устанавливаемых пакетов


//итоговый каталог для заказчика
const dest_folder = "dist";

//каталог исходников
let source_folder = "#src";

let fs = require('fs');

//Переменная path, которая содержит объекты, которые в свою очередь будут содержать пути к файлам и папкам
let path = {
    // пути вывода (куда галп будет выгружать обработанные файлы)

    //для каталога с результатом
    build: {
        //пути к файлам
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/images/",
        fonts: project_folder + "/fonts/",
    },
    //для каталога с исходниками
    src: {
        //исключаем файлы с _*.html из сборки
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        //конкретный файл, который будет обрабатываться галпом, а не все scss файлы в этой папке
        css: source_folder + "/scss/main.scss",
        js: source_folder + "/js/app.js",
        // слушаем все подпапки в папке images например, content или icons
        // и выбираем только файлы с нужными расширениями
        img: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    //объект watch, который содержит пути к файлам, которые мы будем слушать постоянно, т.е.
    //отлавливать их изменения и выполнять
    watch: {
        //слушаем всё, что является нужным файлом
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    //объект CLEAN содержит путь к каталгу проекта и отвечает за удаление этого каталога
    //каждый раз, когда мы будем запускать gulp
    clean: "./" + project_folder + "/"
}
