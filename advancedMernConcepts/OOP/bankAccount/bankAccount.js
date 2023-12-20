class BankAccount {
    constructor (interestRate, balance ) {
        this.intRate = interestRate
        this.balance = balance
    }

    deposit(amount){ 
        this.balance += amount;
        return this;
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        } else {
            console.log("Funds note available!");
            this.balance -= 5;
        }
        return this;
    }

    displayAccountInfo() {
        console.log(`Balance: $${this.balance}`);
        return this;
    }

    yeildInterest() {
        if(this.balance > 0){
            this.balance += (this.balance * this.intRate);
        } else return this;
        return this;
    }
}

const acc1 = new BankAccount(0.3, 0)
const acc2 = new BankAccount(0.3, 0)

acc1.deposit(1).deposit(1).deposit(1).withdraw(1).yeildInterest().displayAccountInfo()
acc2.deposit(2).deposit(2).withdraw(1).withdraw(1).withdraw(1).withdraw(1).yeildInterest().displayAccountInfo()