class BankAccount {
    constructor (interestRate, balance ) {
        this.intRate = interestRate
        this.balance = balance
    }

    deposit(amount){ 
        console.log("/n making deposit")

        this.balance += amount;
        return this;
    }

    withdraw(amount){
        console.log("/n making withdrawal")
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

    yieldInterest() {
        if(this.balance > 0){
            this.balance += (this.balance * this.intRate);
        } else return this;
        return this;
    }
}

export default BankAccount
