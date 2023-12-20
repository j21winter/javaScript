class User {
    constructor (username, email) {
        this.name =  username
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`);
        return this;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`);
        return this;
    }

    displayBalance() {
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`);
        return this;
    }

    transferMoney (otherUser, amount) {
        if(this.accountBalance >= amount){
            this.accountBalance -= amount;
            otherUser.accountBalance += amount;
            console.log(`User: ${this.name}. Balance : $${this.accountBalance}`);
            console.log(`User: ${otherUser.name}. Balance : $${otherUser.accountBalance}`);
        } else console.log("Funds not available");
        return this;
    }
}


const jon = new User("Jon", "123@123.com");
const jeff = new User("Jeff", "123@123.com");
const jane = new User("Jane", " blah@blah.com");

jon.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(10).displayBalance().transferMoney(jane, 1000);

jeff.makeDeposit(100).makeDeposit(100).makeWithdrawal(10).makeWithdrawal(10).displayBalance();

jane.makeDeposit(100).makeWithdrawal(10).makeWithdrawal(10).makeWithdrawal(10).displayBalance();



