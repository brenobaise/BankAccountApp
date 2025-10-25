export abstract class DioAccount {
  private name: string
  private accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setStatus = (newStatus: boolean): void => {
    this.status = newStatus;
  }

  setBalance(amount: number) {
    this.balance = amount;
  }

  deposit = (amount: number): number => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log("New Deposit of: " + amount)
    }
    return amount;
  }

  withdraw = (amount: number): number => {

    if (this.validateStatus() && this.canWithdraw(amount)) {
      this.balance -= amount;
      console.log("Withdrawn: " + amount);
    } else {
      throw new Error("Insuficient funds.")
    }
    return this.balance;
  }

  getBalance = (): number => {
    return this.balance;

  }



  canWithdraw = (amount: number): boolean => {
    return amount <= this.balance;
  }


  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Invalid Account')
  }
}
