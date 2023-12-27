import User from './userOop/user.mjs'

const jon = new User("Jon", "123@123.com");
const jeff = new User("Jeff", "123@123.com");
const jane = new User("Jane", " blah@blah.com");


jon.makeDeposit(100, 'saving').makeDeposit(  100, 'checking').makeDeposit(100, 'saving').makeWithdrawal(10, 'checking').displayBalance('checking').transferMoney('checking',jane, 'saving',100);

jeff.makeDeposit(100, 'checking').makeDeposit(100, 'saving').makeWithdrawal(100, 'checking').makeWithdrawal(100, 'checking').displayBalance('checking');

jane.makeDeposit(100, 'checking').makeDeposit(100, 'checking').makeDeposit(100, 'checking').makeWithdrawal(100, 'saving').displayBalance('checking');