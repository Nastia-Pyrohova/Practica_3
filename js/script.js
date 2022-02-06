'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    cont: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);























// "use strict";

// let num = 50;

// while (num <= 55) {
//         console.log(num);
//         num++
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
// break;
//         continue;
//     }

//     console.log(i)
// }






// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//         console.log('Error');
// } else  if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Not');
//         break;
//     case 100:
//         console.log('Not');
//         break;
//     case 50:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Ne segodnya');
//         break;

// }






















// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     cont: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// console.log('arr' + "- object");
// console.log(4 + +"5");


// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(5 % 2);
// console.log(2 + 2 * 2 !== '6');

// && 
// ||

// const isChecked = true;
// isClose = false;

// console.log(isChecked && !isClose);
















// const category = 'toys';

// console.log('https://someurl.com/'+ category + '/');
// console.log(`https://someurl.com/${category}/5`);

// const user = "Nastya";
// alert(`Hi, ${user}`);









// alert('Hello');

//  const result = confirm("Are you here?");
//  console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));











// let numer = 4.6;

// console.log(-4 / 0);
// console.log('string' * 9);

// const persone = "Alex";

// const bool = false;

// console.log(something);

// let und;
// console.log(und);



// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// console.log(obj['name']);


// let arr = ['plum.png', 'orange.jpg', 9, 'apple.bmp', []];
// console.log(arr[1]);













// a = 15;
// console.log(a);



// let number = 5;
// const leftBorderWidth = 1;


// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// var name = 'Nastya';

// alert(5);
// [].push('a');