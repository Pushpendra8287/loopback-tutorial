"use strict";
exports.__esModule = true;
var Helloworld = /** @class */ (function () {
    function Helloworld(message) {
        console.log(message);
    }
    return Helloworld;
}());
var helloworld = new Helloworld('welcome to typescript');
console.log(helloworld);
//=============================================
//generics Function 
function loggerAndReturn(thing /*argument type*/) {
    return thing;
}
// const message : string = loggerAndReturn<string>('Hello From Generics Function')
var message = loggerAndReturn('Hello From Generics Function');
var message1 = loggerAndReturn(50);
console.log(message);
console.log(message1);
//================================================
//array Generics
function getArray(items) {
    return new Array().concat(items);
}
// let numArray = getArray<number>([1,2,3,4,5,6,7]);
// let str = getArray<string>(["Banana", "Apple", "Orange"]);
//
//if we remove number type or string type then run function again
var numArray = getArray([1, 2, 3, 4, 5, 6, 7]);
var str = getArray(["Banana", "Apple", "Orange"]);
console.log(numArray);
console.log(str);
// but if i will push number in string array then will give arror
// numArray.push("mangoes");
numArray.push(10);
console.log(numArray);
// str.push(10);
str.push("mangoes");
console.log(str);
//==============================================
// multiple type varrieable
function multiplTypeVariables(id, name) {
    console.log((typeof id + ', ' + typeof name + ", "), id, name);
}
multiplTypeVariables(1, "Pushpendra kumar");
//generics with non generics type 
function displaytype(id, name) {
    console.log(typeof id + ", " + typeof name);
}
displaytype(2, "Kumar");
