class User {
    constructor (username, email) {
        this.name =  username, 
        this.email = email
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`)
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`)
    }

    displayBalance() {
        console.log(`User: ${this.name}. Balance : $${this.accountBalance}`)
    }

    transferMoney (otherUser, amount) {
        if(this.accountBalance > amount){
            this.accountBalance -= amount
            otherUser.accountBalance += amount
            console.log(`User: ${this.name}. Balance : $${this.accountBalance}`)
            console.log(`User: ${otherUser.name}. Balance : $${otherUser.accountBalance}`)
        } else console.log("Funds not available")
    }
}


const jon = new User("Jon", "123@123.com")
const jeff = new User("Jeff", "123@123.com")
const jane = new User("Jane", " blah@blah.com")

jon.makeDeposit(100)
jon.makeDeposit(100)
jon.makeDeposit(100)
jon.makeWithdrawal(10)
jon.displayBalance()

jeff.makeDeposit(100)
jeff.makeDeposit(100)
jeff.makeWithdrawal(10)
jeff.makeWithdrawal(10)
jeff.displayBalance()

jane.makeDeposit(100)
jane.makeWithdrawal(10)
jane.makeWithdrawal(10)
jane.makeWithdrawal(10)
jane.displayBalance()

jon.transferMoney(jane, 1000)

