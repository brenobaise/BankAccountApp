import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SaverAccount } from './class/SaverAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)


// console.log('\n Account User: ' + peopleAccount.getName() + ' >>> \n')
// peopleAccount.getBalance();
// peopleAccount.deposit(200);
// peopleAccount.getBalance();

// peopleAccount.withdraw(100);
// peopleAccount.getBalance();

console.log('\n Account User: ' + companyAccount.getName() + ' >>> \n')
console.log(companyAccount.getBalance());
companyAccount.deposit(600);
console.log(companyAccount.getBalance());

companyAccount.withdraw(100);
console.log(companyAccount.getBalance());

// companyAccount.setStatus(false);

companyAccount.getLoan(1000);
console.log(companyAccount.getBalance());


const saverAccount: SaverAccount = new SaverAccount("Savings Breno", 2);

console.log('\n Account name: ' + saverAccount.getName() + ' >>> \n')
saverAccount.deposit(200);
console.log(saverAccount.getBalance());
