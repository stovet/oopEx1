class BankAccount {
    balance: number;
    interestRate: number;
    constructor(balance: number, interestRate: number){
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest(): void{
        this.balance = this.balance * ( 1 * this.interestRate);
    }
}


let pnc: BankAccount = new BankAccount(5000, 2);

pnc.addInterest();

export default BankAccount;