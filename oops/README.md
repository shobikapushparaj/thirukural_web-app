# Banking System - Console Application (OOP Project)

## Overview
The **Bank Teller Console Application** is a simple command-line program designed for bank tellers to manage customer accounts. It supports two types of accounts:

- **Savings Account**
- **Credit Card (CC) Account**

A user (bank teller) will enter the account num and will be able to see what type of account it is (savings or cc) and the next set of functionalities (balance/withdraw/deposit) will be available. 

Based on the account type, the user will be able to perform the appropriate actions.

## Features

### Mandatory Features:

- Users must enter the account number as first step.
- Functionality is based on the selected account type.

#### Account Balance Inquiry
- Retrieve and display an account's balance by entering the account number.

#### Deposit Money
- **Savings Account**: Add funds and update the balance.
- **Credit Card Account**: Make payments toward reducing outstanding debt.

#### Withdraw Money
- **Savings Account**: Deduct funds if the balance is sufficient.
- **Credit Card Account**: Withdraw within the credit limit, increasing the debt.

> **Note:** You can have additional features of your choice.

## Example input/output:

```
Welcome to XYZ Bank.

> Enter account num: 12345

New account creation:

> Account type (S)avings/ (C)redit: S
Savings account created. 


1. View Balance.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 2

> Deposit amount: 1000
Rs. 1000.00 deposited. Your balance is Rs. 1000.00

1. View Balance.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 3

> Withdraw amount: 250
Rs. 250 withdrawn. Your balance is Rs. 750

1. View Balance.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 0


Welcome to XYZ Bank.

> Enter account num: 63527
Credit card account selected.

1. View bill.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 1

Your bill is Rs. 2000.00. Your credit limit is Rs. 10000.00

1. View bill.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 2

> Deposit amount: 500
Rs. 500.00 deposited. Your bill is now Rs. 1500.00


1. View bill.
2. Deposit 
3. Withdraw
0. Main Menu
> Enter a choice: 3

> Withdraw amount: 250
Rs. 250 withdrawn. Your bill is Rs. 1750.

```



## Tech Stack:

- Choose any object oriented programming language of your choice.
- Provide commands to build and run the application.
