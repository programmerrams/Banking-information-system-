CREATE DATABASE FlagBank;

CREATE TABLE Customers (
    CustomerID int, -- Primary Key --
    FirstName varchar(255),
    LastName varchar(255),
    Address varchar(255),
    Phone int,
)

CREATE TABLE Accounts (
    AccountID int, -- Primary Key --
    AccountNumber int,
    AccountType varchar, -- (Savings, Checkings) *Temporary Data Type* -- 
    Balance float,
    CustomerID int, -- Foreign Key (Customers) --
)

CREATE TABLE Transactions (
    TransactionID int, -- Primary Key --
    TransactionType varchar, -- (Deposit & Withdrawal) *Temporary Data Type* --
    Amount float,
    TransactionDate date,
    AccountID int, -- Foreign Key (Accounts) --
)

CREATE TABLE Loans (
    LoanID int, -- Primary Key --
    LoanAmount float,
    LoanType varchar, -- (Home, Personal, Car, etc.) --
    InterestRate float,
    StartDate date,
    EndDate date,
    CustomerID int, -- Foreign Key (Customers) --
)