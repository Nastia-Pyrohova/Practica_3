"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    // Метод start - Начало: первый вопрос...
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        // Проверка: на пустое поле для ввода ИЛИ на кнопку Отмена ИЛИ на НЕ число
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    // Метод rememberMyFilms - Информация о фильмах
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Один из последних просмотренных фильмов №_${i+1}`),
                b = prompt('На сколько оцените его?');
            /* Проверка на пустое поле для ввода ИЛИ на кнопку Отмена ИЛИ на количество символов */
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    // Метод detectPersonalLevel - Анализ уровня Киномании
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    // Метод showMyDB - проверка приватности БД и вывод главного Объекта программы
    // Аргумент hidden - Свойство private: false или true
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    // 2-я часть задания - метод toggleVisibleMyDB
    // Переключаем приватность/видимость БД
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    // 3-я часть задания - метод Жанров writeYourGenres
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр номер ${i}`);
            // Проверка на пустое поле для ввода ИЛИ на кнопку Отмена
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        // Вывод любимых жанров №... - Метод forEach
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};