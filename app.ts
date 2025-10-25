import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)


console.log('\n Account User: ' + peopleAccount.getName() + ' >>> \n')
peopleAccount.getBalance();
peopleAccount.deposit(200);
peopleAccount.getBalance();

peopleAccount.withdraw(100);
peopleAccount.getBalance();

console.log('\n Account User: ' + companyAccount.getName() + ' >>> \n')
companyAccount.getBalance();
companyAccount.deposit(600);
companyAccount.getBalance();

companyAccount.withdraw(100);
companyAccount.getBalance();