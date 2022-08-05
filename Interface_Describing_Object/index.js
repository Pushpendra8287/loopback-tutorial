"use strict";
exports.__esModule = true;
function checkElemntAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElemntAt;
var items = [1, 3, 5, 7];
var b = checker(items, 3, 1);
console.log(b);
var s = { enabled: true, maximized: false };
console.log(s);
console.log(s['maximized']);
