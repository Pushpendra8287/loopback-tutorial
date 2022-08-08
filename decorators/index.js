"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function log(title) {
    //decorator factory function will return 
    //decorator function then needs argument bellow
    return function (target, key, descriptor) {
        //console.log(target)
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // call the original metthod
            var result = original.apply(this, args);
            // log the call and the result 
            console.log("title : ".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned \n            ").concat(JSON.stringify(result), " "));
            // return the result
        };
        return descriptor;
    };
    // //console.log(target)
    // const original = descriptor.value;
    // descriptor.value = function(...args: any[]){
    //     // call the original metthod
    //     const result= original.apply(this,args);
    //     // log the call and the result 
    //     console.log(`${key} with args ${JSON.stringify(args)} returned 
    //           ${JSON.stringify(result)} `);
    //     // return the result
    // };
    // return descriptor;
}
;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Using the decorator @log
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var cal = new Calculator();
// square with args [2] returned 4
cal.square(2);
// square with args [3] returned 9
cal.square(3);
