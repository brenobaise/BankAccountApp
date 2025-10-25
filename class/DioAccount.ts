export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
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

  getBalance = (): void => {
    console.log("Current Balance: " + this.balance)
  }


  canWithdraw = (amount: number): boolean => {
    return amount < this.balance;
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
