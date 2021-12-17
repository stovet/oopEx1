import BankAccount from "./bankAccount";

class BankAccountWithFee extends BankAccount {
    fee: number = 2;
    applyFee():void{
        this.balance -= this.fee;
    };
}

let chase:BankAccountWithFee = new BankAccountWithFee(400, 5);

console.log(chase.balance);
console.log(chase.interestRate);
console.log(chase.applyFee());
console.log(chase.balance);