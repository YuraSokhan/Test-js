"use strict";

console.log('hell on');
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



let user;
let userName;
userName = "Вася";
user = userName;
console.log(user, userName);

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
 console.log("hell on 12 times");
 i++;
}