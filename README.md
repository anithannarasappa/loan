Banking Loan Eligibility Pre-Screening System

1. Project Description

The Banking Loan Eligibility Pre-Screening System is a JavaScript-based application that checks a customer's preliminary eligibility for a bank loan based on predefined business rules.

2. Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

3. Features

- Accepts customer details.
- Checks monthly income and credit score.
- Verifies existing EMI burden.
- Classifies customers into Standard and Restricted categories.
- Displays loan eligibility and remarks.
- Provides preliminary assessment only; it does not approve actual loans.

4. Input Details

- Customer ID
- Employment Type
- Monthly Income
- Requested Loan Amount
- Existing Monthly EMI
- Credit Score

5. Business Rules

- Standard category: Salaried customers with a credit score of 750 or above and monthly income of at least ₹30,000.
- Restricted category: Customers with a credit score between 650 and 749 require additional verification.
- EMI limit: Existing EMI must not exceed 40% of monthly income.
- Invalid financial details are rejected.

Note: The 40% EMI limit is an assumed rule for this project.

6. How to Run the Project

1. Install Node.js.

2. Open the project folder in Visual Studio Code.

3. Save the JavaScript code as "Banking Loan Eligibility.js".

4. Open the terminal.

5. Run the command:
   
   "node "Banking Loan Eligibility.js""

6. View the eligibility result in the terminal.

7. Expected Output

- Customer ID
- Employment Type
- Monthly Income
- Requested Loan Amount
- Credit Score
- Existing EMI
- Loan Eligibility
- Eligibility Category
- Remarks

8. Conclusion

This project demonstrates how JavaScript conditional statements can be used to evaluate preliminary loan eligibility according to predefined banking rules. Final loan approval requires verification by the bank.
