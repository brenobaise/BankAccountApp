# Developing the Dio Bank

Developed by [Nathally Souza](https://github.com/nathyts)

#### Project developed using basic TypeScript concepts

### Technologies

- TypeScript

### How to run the project

1 - Clone the repository

2 - Install dependencies

    npm install

3 - Run the project

    npm run dev

#### Challenges

[ ] Implement the deposit and withdraw methods in the DioAccount class

- The account balance values must be updated according to the deposited amount
- Only accounts with status `true` and a balance greater than the requested
  amount can perform withdrawals

[ ] Implement the getLoan method in the CompanyAccount class

- The balance values must increase according to the loan amount
- Only accounts with status `true` can request a loan

[ ] Create a new account type based on DioAccount

- This account should not receive new attributes
- This account must have a deposit method that adds an extra 10 to the deposited
  value (Example: a deposit of 100 becomes 110)

[ ] All attributes of any account must be private

[ ] The attributes `name` and `accountNumber` cannot be modified either
internally or externally

[ ] Create instances for each account type in `app.ts` and execute the possible
methods
