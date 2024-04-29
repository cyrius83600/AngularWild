class BankCustomer
{
    private name:String;
    private code:String;

    public constructor(name:String, code:String)
    {
        this.name = name;
        this.code = code;
    }

    public getName():String{
        return this.name;
    }

    public verifyPinInput = function(codeRentre:String):boolean{
        return this.code === codeRentre;
    }
}


const customer = new BankCustomer('John Doe', '3579');
const assert = require('assert');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));