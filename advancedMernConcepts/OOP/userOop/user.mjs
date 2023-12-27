import BankAccount from '../bankAccount/bankAccount.mjs'

class User {
    constructor (username, email) {
        this.name =  username
        this.email = email
        this.accounts = {checking : new BankAccount(0.02, 0), saving : new BankAccount(0.05, 100)}
    }
    makeDeposit(amount, accountType) {
        this.accounts[accountType].deposit(amount);
        console.log(`User: ${this.name}.`);
        this.accounts[accountType].displayAccountInfo()
        return this;
    }

    makeWithdrawal(amount, accountType) {
        this.accounts[accountType].withdraw(amount);
        console.log(`User: ${this.name}.`);
        this.accounts[accountType].displayAccountInfo()
        return this;
    }

    displayBalance(accountType) {
        console.log(`User: ${this.name}.`);
        this.accounts[accountType].displayAccountInfo()
        return this;
    }

    transferMoney (myAccountType, otherUser,otherUserAccountType, amount ) {
        console.log("\n making transfer")

        if(this.accounts[myAccountType].balance >= amount){
            this.accounts[myAccountType].withdraw(amount);
            otherUser.accounts[otherUserAccountType].deposit(amount);
            console.log(`User: ${this.name}.`);
            this.accounts[myAccountType].displayAccountInfo()
            console.log(`User: ${otherUser.name}.`);
            otherUser.accounts[otherUserAccountType].displayAccountInfo()
        } else console.log("Funds not available");
        return this;
    }
}
export default User



