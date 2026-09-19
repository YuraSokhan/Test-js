"use strict";

console.log('hello, world');
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
userName = "Hello";
user12 = userName;
console.log(user12, userName);

let name1  = {
    name: "453DFG",
    age: 35
}
console.log(name1);
let user2 = "33" / "11";
user2 = Number(user2);
console.log(user2);

let a;
a = null || 0 || undefined || (true * 5) || "hello" || 3 ;   // =5
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
 console.log("hello 12 times");
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
    message = 14;                                   //про особливості глобальних, локальних змінних, можна побачити з виводом в консоль
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
    console.log('Сума: ' + ((numSum == true) ? numSum : "Enter something"))
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
    console.log("short number ");
}
function showMoreMessage(){
    console.log("long number ");
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
        setTimeout(showMessage3, 500, text+" hello", count + 1);       // повторює виклик функції, але є обмеження через умову
    }    
}
let timeId = setTimeout(showMessage3, 1000, "hello");                 // викликає функцію з інтервалом часу 1000мл секунд
clearTimeout(timeId);  // зупиняє setTimeout
console.log("");
console.log("");
console.log("---------------------------------OBJECT------------------------------");

// обєкти
let car = {
    brand: "BMW", 
    model: 7,
    adress: {
        state: "California",
        city: "Los Angeles",
    }
}
console.log(car.brand);
console.log(car.adress);
console.log(car.adress.state);   // обєкт в обєкті
console.log("--------------------------------------------------------------------");

car.adress.country = "USA";     // створенння нової властивості обєкта
console.log(car.adress);
delete car.adress.country;      // видалення властивості
console.log(car.adress);
console.log("--------------------------------------------------------------------");


let anotherCar = car;                   // це не створення нового обєкта, а створення "посилання, ярлика" на основний обєкт car
console.log(anotherCar);
//anotherCar.brand = "AUDI";             // не дивлячись що ми змінили anotherCar, car так само змінилась
console.log(car);                      
console.log("--------------------------------------------------------------------");

let newCar = Object.assign({year: 2021}, car);       // оце вже створення нового обєкта, на основі іншого обєкта
newCar.brand = "Mersedec";                  //  він вже функціонує, як незалежно інший обєкт
console.log(car);
console.log(newCar);
console.log("--------------------------------------------------------------------");

console.log(car.year);                // якщо я хочу вивести допустим неіснуючу властивість - undefined
console.log(car?.year?.old)           // якщо є вкладеність, то вибє помилку, тому треба писати ?
if("year" in car) {
    console.log(car.year);            // провірка чи є car.year. in корисне у випадку, якщо змінна існує, але має значенння undefined
}
console.log("--------------------------------------------------------------------");

for(let key in car) {                  // цикл for in, щоб переглянути всі властивості обєкта
    console.log(key);
    console.log(car[key]);
}
console.log("--------------------------------------------------------------------");

for(let key in car.adress) {            // цикл для пергляду обєктів в обєкті 
    console.log(key);
    console.log(car.adress[key]);
}
console.log("--------------------------------------------------------------------");

let car1 = {
    brand: "AUDI", 
    model: 7,
    adress: "Los Angeles",

    showInfo() {                                         // це метод обєкта
        for(let key in car1) {                                  
            if (typeof this[key] !== 'function'){       // і тут такий прикол шо for in так само виводить методи, а не тільки властивості
                console.log(`${key}: ${car1[key]}`);
            }
        }
    }
}
car1.showInfo();
console.log("--------------------------------------------------------------------");

let car2 = {          // це посилання на обєкт, а не сам обєкт, якщо обєкт вже немає змін-посилань на себе, то він самознищиться
    brand: "Opel",
    model: 3,
    adress: "New York City",

    showInfo () {
        console.log(`brand: ${this.brand},      model: ${this.model},     adress: ${this.adress}`);     
        // так ось в чому логіка, якщо змінна-посилання на обєкт car2 буде зміненна то запис car2.model очевидно вже буде не дійсне, тому тут доречне this
        // console.log(`brand: ${car2.brand},      model: ${car2.model},     adress: ${car2.adress}`);
    }   
}
let car3 = car2;
car2 = null;
car3.showInfo()
console.log("--------------------------------------------------------------------");

function UserInfo (name, age = 30) {      // конструктора імя з великої букви
    this.name = name;                     // this бо потім зміниться імя
    this.age = age;
}

console.log(new UserInfo("hell naa", 23));
console.log(new UserInfo("hello"));

let variable = new UserInfo("helo");
console.log(variable);

console.log("");
console.log("");

console.log("-------------------------------Number-------------------------------");

let num1 = 1e6;   // 1 000 000
let num2 = 1e-6;  // 0. 000 001

let num = 45;  // в кожній системі (16ткова система числення, 8-кова, бінарна)
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));
console.log("                  --------Math-------------");

let numOne = Math.floor(5.7);             // округлення в меншу сторону
let numTwo = Math.ceil(5.3);              // округлення в більшу сторону
let numThree = Math.round(5.7);           // округлення нормально
console.log(numOne, numTwo, numThree);
console.log("");

console.log(Math.random());          // від 0 (включно) до 1 (не включно)
console.log(Math.min(5, 12, -24));
console.log(Math.max(5, 12, -24));
console.log(Math.abs(-54));           // модуль, тобто без -
console.log(Math.pow(3,2));           // степінь 3^2
console.log(Math.sqrt(44));           // корінь
console.log("");


num = Math.round(5.456 * 100) / 100;   // якщо треба не округлювати до цілих, змінювати треба 10 залежно наскільки хочеш
console.log(num);
console.log(Number((5.45).toFixed(1)))  // toFixed - округлення і скільки чисел після коми, треба писати Number бо видає результат в string - "5.5"
console.log("");


console.log(Number(25 + "Nihhha"));    // NaN
console.log(isNaN(25 + "Nihhha"));     // true
console.log(NaN === NaN);              // false бо NaN кожний має унікальні значення
console.log("");


console.log(isFinite("25"));            // "25" -> 25 -> true
console.log(isFinite ("Hello!"));       // NaN -> false
console.log(isFinite (10 / 0));         // Infinity -> false
console.log("");

let str = "158.56px";
console.log(parseInt(str));     // витягує число до моменту помилки, але тільки до цілого значення
console.log(parseFloat(str));   // витягує з числами після коми
console.log("");


