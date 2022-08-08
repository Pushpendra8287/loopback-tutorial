"use strict";
exports.__esModule = true;
var detaills = /** @class */ (function () {
    function detaills(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    detaills.prototype.grtFirstname = function () {
        //
        console.log("my firstname is " + this.firstname, this.lastname, this.age);
    };
    ;
    detaills.prototype.getLastname = function () {
        //
    };
    return detaills;
}());
// o0bject
// let datale = new detaills();
// datale.firstname = "pushpendra";
// datale.grtFirstname();
var datale = new detaills("Pushpendra", "kumar", 28);
datale.grtFirstname();
