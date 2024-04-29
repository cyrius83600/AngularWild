//import assert from 'assert';
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, code) {
        // public getName():String{
        // }
        this.verifyPinInput = function (codeRentre) {
            return this.code === codeRentre;
        };
        this.name = name;
        this.code = code;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
var assert = require('assert');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.equal(customer.getName(), 'Essai');
assert.ok(customer.verifyPinInput('3579'));
