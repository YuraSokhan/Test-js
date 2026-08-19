"use strict";

console.log('hello, niggers');
const girl = (`
___███████▀◢▆▅▃ 　　　   　　 　　　 ▀▀████
___██████▌◢▀█▓▓█◣   　　　　　　▂▃▃　 ████
__▐▐█████▍▌▐▓▓▉　　　　　　　◢▓▓█ ▼ ████
__ ▌██████▎　 ▀▀▀　　　　　　 　█▓▓▌ ▌ █████▌
_▐ ██████▊　 ℳ 　　　　　　　　▀◥◤▀    ▲████▉
_▊ ███████◣ 　　　　　　  ′　　　ℳ　 ▃◢██████▐
_ ▉ ████████◣ 　　　　 ▃、　　　　　◢███▊███ 
_▉　 █████████▆▃　　　　　　　 ◢████▌ ███ 
_ ▉　 ████▋████▉▀◥▅▃▃▅▇███▐██▋　▐██
`);
console.log(girl); 

let user12;
let userName;
userName = "Nigga";
user12 = userName;
console.log(user12, userName);

let name1  = {
    name: "453DFG" ,
    age: 35
}
console.log(name1);
let user2 = "33" / "11";
user2 = Number(user2);
console.log(user2);

let a;
a = null || 0 || undefined || (true * 5) || "nigga" || 3 ;   // =5
console.log(a);

let b = "null" && 1 && undefined && 2;  // undefined
console.log(b);

console.log(3 && 4 && false && 123);     
// console.log(true && true && false && true);
console.log("g" && null && undefined);
console.log(2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1);
console.log(2 + 1 === 3 && "1" == 1);
console.log(10 > 5 && 10 === 1);

let i = -10;
while (2 > i) {
 console.log("nigga 12 times");
 i++;
}

function sendEmail() {
  return "Email sent!";
}

let user = 1;
let result = user && sendEmail();                       // виведе то що false або останню змінну(дію)
console.log(result);

for(let i = 0; i < 5; i++){
    console.log(i);
    if (i == 2 ) break;
}

FirstFor: for(let num = 0; num < 4; num++){           //мітка для break . Мітка працює лише для break, continue.
    for(let size = 0; size < 3; size++){
        if(num == 2) break FirstFor;
        console.log(num, size);
    }
}

let message;
function showMessage() {                             
    message = 14;                                   //про особливості глобаних, локальних змінних, можна побачити з виводом в консоль
}
console.log(message);
showMessage();
console.log(message);

let message1;                                       //про особливості глобаних, локальних змінних, ще один варіант
function showMessage1() {                             
    let message1 = 11;                            
}
console.log(message1);
showMessage1();
console.log(message1);

function calcSum(numOne = 0, numTwo = 0){           // можна присвоїти значення для параметра
    let numSum = numOne + numTwo;
    console.log('Сума: ' + ((numSum == true) ? numSum : "Enter something nigga"))
}
calcSum()                    // а ще можна не задати параметри, навіть якщо треба, але буде тоді значення undefined змінної

function calcSumMod(numOne, numTwo, less, more){  // отак тоже можна, функція в функції, головне при виклику функції в функції- параметру не писати () бо викличиться функція зразу
    if (numOne + numTwo < 5){
        less();
    } else {
        more();
    }    
}
function showLessMassage(){
    console.log("short number nigga");
}
function showMoreMessage(){
    console.log("long number nigga");
}
calcSumMod(1, 2, showLessMassage, showMoreMessage);  // showMoreMessage, а не showMoreMessage(), бо викличеш функцію зразу

function calcFormula(numOne, numTwo){              // return наглядно
    let result = 1;
    for(let i = 0; numTwo > i; i++){
        result *= numOne;                         
    }
    return result;
}
console.log(calcFormula(2 , 3));

let fun = function (){                              // отакі приколи, змінна - функція
    console.log("Я змінна, функція");
};
fun();

function showMessage3 (text, count = 0){
    console.log(text);
    if (count < 5) {
        setTimeout(showMessage3, 500, text+" nigga", count + 1);       // повторює виклик функції, але є обмеження через умову
    }    
}
let timeId = setTimeout(showMessage3, 1000, "nigga");                 // викликає функцію з інтервалом часу 1000мл секунд
clearTimeout(timeId);  // зупиняє setTimeout

