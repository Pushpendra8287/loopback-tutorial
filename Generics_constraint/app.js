"use strict";
exports.__esModule = true;
// generics constraints 
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Customer;
}());
function custumerLogger(customer) {
    console.log("".concat(customer.firstName, " ").concat(customer.lastName));
}
var customer = new Customer("Jane", "Doe");
custumerLogger(customer);
