import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SaverAccount } from './class/SaverAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)


// First Account
console.log('\n Account User: ' + peopleAccount.getName() + ' >>> ')
console.log(peopleAccount.getBalance());
peopleAccount.deposit(200);
console.log(peopleAccount.getBalance());

peopleAccount.withdraw(100);
console.log(peopleAccount.getBalance());

// Second Account
console.log('\n Account User: ' + companyAccount.getName() + ' >>> ')
console.log(companyAccount.getBalance());

// companyAccount.setStatus(false);

companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());
companyAccount.withdraw(100);
console.log(companyAccount.getBalance());


// Third Account
const saverAccount: SaverAccount = new SaverAccount("Savings Breno", 2);

console.log('\n Account name: ' + saverAccount.getName() + ' >>> ')
console.log(saverAccount.getBalance());
saverAccount.deposit(200);
console.log(saverAccount.getBalance());
