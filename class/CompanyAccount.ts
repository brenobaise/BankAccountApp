import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (creditAmount: number): number => {
    if (this.validateStatus()) {
      console.log("Loan acquired: " + creditAmount);
      this.balance += creditAmount;
    } else {
      console.log("Loan denied: invalid account status");
    }

    return this.balance;
  }



}
