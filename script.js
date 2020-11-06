'use strict';


var leftBorderWidth = 1;
{
	let seconnd =2;
	console.log(seconnd);
}
const pi = 3.14;
console.log(leftBorderWidth);


//типы данных

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let persone = {
	name: "Jone",
	age: 25,
	isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);


let arr = ['plum.png', 'orange.jpg', 'apple.bpm'];

console.log(arr[2]);

// alert("hello Word");

// let answer = confirm("Are you here?");

// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");

// console.log(typeof(answer));

// console.log("arr" + "- object");
// console.log(4  + "- object");

let incr = 10,
		decr = 10;

// incr++;11
// decr--;9
//префиксная форма возвращает измененное значение
// console.log(++incr);
// console.log(--decr);
//посфиксна форма возращает старое значение, потом изменяет.
console.log(incr++);
console.log(decr--);
//возвращает остаток от деления двух чисел %
console.log(5%2);
console.log("2" === 2);
let isChecked = false,
		isClose = false;

console.log(isChecked || !isClose);