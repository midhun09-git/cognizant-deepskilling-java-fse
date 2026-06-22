-- Exercise 1: Control Structures

-- Scenario 1: Apply 1% discount on loan interest rate for customers above 60 years

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (1, 'Midhun', 65, 8000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Arun', 45, 12000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Kaviya', 70, 15000, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 10, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 12, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 11, SYSDATE + 20);

COMMIT;

BEGIN
    FOR customer_record IN (
        SELECT c.CustomerID, c.Age, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    )
    LOOP
        IF customer_record.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = customer_record.LoanID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied for Customer ID: ' || customer_record.CustomerID
            );
        END IF;
    END LOOP;
END;
/

-- Scenario 2: Mark customers as VIP if balance is greater than 10000

BEGIN
    FOR customer_record IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF customer_record.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_record.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Customer ID ' || customer_record.CustomerID || ' promoted as VIP'
            );
        END IF;
    END LOOP;
END;
/

-- Scenario 3: Display reminders for loans due within next 30 days

BEGIN
    FOR loan_record IN (
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID ' || loan_record.LoanID ||
            ' for Customer ID ' || loan_record.CustomerID ||
            ' is due on ' || loan_record.DueDate
        );
    END LOOP;
END;
/

SELECT * FROM Customers;
SELECT * FROM Loans;