"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();

const { border, bg } = options.color;
console.log(border);
//console.log(Object.keys(options).length);
//console.log(options.name);


//delete options.name;
//console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key] [i]}`)
                //counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
    counter++;
    //console.log(`Свойство ${key} имеет значение ${options[key]}`)
}
console.log(counter);











/*function first () {
    setTimeout(function() {
        console.log(1);
    }, 5000);
}

function second() {
    console.log(2);

}

first();
second();

function learnJS ( lang, callback) {
    console.log(`Я учу: ${lang}`);
   callback();

}

function done() {
    console.log('Я прошел тот урок!');
}
learnJS('JavaScript', done);
*/


/*learnJS('JavaScript', function() {
console.log('Я прошел тот урок!');
});*/




/*
const str = "tEst";
const arr = [1, 2, 4];

//console.log(str[2] = 'd');


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const num = 12.5;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));*/












/*let num = 20;


function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}



showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(7, 8));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hi");
};
logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;

};*/