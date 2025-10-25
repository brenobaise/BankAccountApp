import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (creditAmount: number): number => {
    let currentBalance = this.getBalance();
    if (this.validateStatus()) {
      console.log("Loan acquired: " + creditAmount);
      this.setBalance(currentBalance += creditAmount);
    } else {
      console.log("Loan denied: invalid account status");
    }

    return this.getBalance();
  }



}
