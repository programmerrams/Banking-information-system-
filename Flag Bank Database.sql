CREATE DATABASE FlagBank;

USE FlagBank;

-- Customers table
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each customer
    first_name VARCHAR(255) NOT NULL, -- Customer's first name
    last_name VARCHAR(255) NOT NULL, -- Customer's last name
    address VARCHAR(255), -- Customer's address
    phone VARCHAR(15) NOT NULL CHECK (LENGTH(phone) BETWEEN 10 AND 15), -- Validates phone length
    email VARCHAR(255) UNIQUE, -- Ensures unique email addresses
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Tracks record creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Tracks record updates
);

-- Accounts table
CREATE TABLE accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each account
    account_number BIGINT NOT NULL UNIQUE, -- Ensures unique account numbers
    account_type ENUM('Savings', 'Checkings') NOT NULL, -- Restricts to valid account types
    balance DECIMAL(15, 2) DEFAULT 0.00, -- Ensures precision for monetary values
    customer_id INT NOT NULL, -- Links account to a customer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Tracks record creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Tracks record updates
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE, -- Deletes accounts if customer is deleted
    INDEX (customer_id) -- Improves query performance for customer-related queries
);

-- Transactions table
CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each transaction
    transaction_type ENUM('Deposit', 'Withdrawal') NOT NULL, -- Restricts to valid transaction types
    amount DECIMAL(15, 2) NOT NULL CHECK (amount > 0), -- Ensures positive transaction amounts
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Tracks transaction time
    account_id INT NOT NULL, -- Links transaction to an account
    FOREIGN KEY (account_id) REFERENCES accounts(account_id) ON DELETE CASCADE, -- Deletes transactions if account is deleted
    INDEX (account_id) -- Improves query performance for account-related queries
);

-- Loans table
CREATE TABLE loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each loan
    loan_amount DECIMAL(15, 2) NOT NULL CHECK (loan_amount > 0), -- Ensures positive loan amounts
    loan_type VARCHAR(50) NOT NULL, -- Allows flexibility for loan types
    interest_rate DECIMAL(5, 2) NOT NULL CHECK (interest_rate >= 0 AND interest_rate <= 100), -- Validates interest rate
    start_date DATE NOT NULL, -- Loan start date
    end_date DATE NOT NULL CHECK (end_date > start_date), -- Ensures end date is after start date
    customer_id INT NOT NULL, -- Links loan to a customer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Tracks record creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Tracks record updates
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE, -- Deletes loans if customer is deleted
    INDEX (customer_id) -- Improves query performance for customer-related queries
);

-- Credit Card Table
CREATE TABLE credit_cards (
    card_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each credit card
    card_number BIGINT NOT NULL UNIQUE, -- Ensures unique credit card numbers
    card_type ENUM('Visa', 'Mastercard', 'American Express') NOT NULL, -- Restricts to valid card types
    credit_limit DECIMAL(15, 2) NOT NULL CHECK (credit_limit > 0), -- Ensures positive credit limit
    balance DECIMAL(15, 2) DEFAULT 0.00, -- Ensures precision for monetary values
    customer_id INT NOT NULL, -- Links credit card to a customer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Tracks record creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Tracks record updates
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE, -- Deletes credit cards if customer is deleted
    INDEX (customer_id) -- Improves query performance for customer-related queries
);