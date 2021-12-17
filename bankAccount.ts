class BankAccount {
    balance: number;
    interestRate: number;
    
    addInterest(): void{}
}

class BankAccountWithFee extends BankAccount {
    fee: number;
    applyFee():void{};
}

let chase:BankAccountWithFee = new BankAccountWithFee();

console.log(chase.balance);
console.log(chase.interestRate);
console.log(chase.applyFee());

let pnc: BankAccount = new BankAccount();

pnc.addInterest();