// Banking Loan Eligibility Pre-Screening System

const customerId = "C101";
const monthlyIncome = 40000;
const loanAmount = 200000;
const existingEMI = 5000;
const employmentType = "Salaried";
const creditScore = 780;

const STANDARD_CREDIT_SCORE = 750;
const RESTRICTED_CREDIT_SCORE = 650;
const MINIMUM_INCOME = 30000;
const EMI_LIMIT = 0.40;

if (
    monthlyIncome <= 0 ||
    loanAmount <= 0 ||
    existingEMI < 0 ||
    creditScore < 0 ||
    creditScore > 900
) {
    console.log("Invalid customer details.");

} else {
    let loanEligibility = "Not Eligible";
    let eligibilityCategory = "Not Eligible";
    let remarks = "";

    const emiLimit = monthlyIncome * EMI_LIMIT;

    if (existingEMI > emiLimit) {
        remarks = "Existing EMI exceeds the permitted limit.";

    } else if (employmentType === "Salaried" &&
               creditScore >= STANDARD_CREDIT_SCORE &&
               monthlyIncome >= MINIMUM_INCOME) {

        loanEligibility = "Eligible for Pre-Screening";
        eligibilityCategory = "Standard";
        remarks = "Meets standard eligibility requirements.";

    } else if (creditScore >= RESTRICTED_CREDIT_SCORE &&
               creditScore < STANDARD_CREDIT_SCORE) {

        loanEligibility = "Eligible for Pre-Screening";
        eligibilityCategory = "Restricted";
        remarks = "Additional verification is required.";

    } else {
        remarks = "Does not meet minimum eligibility requirements.";
    }

    console.log("===== LOAN ELIGIBILITY RESULT =====");
    console.log("Customer ID:", customerId);
    console.log("Employment Type:", employmentType);
    console.log("Monthly Income: Rs.", monthlyIncome);
    console.log("Requested Loan Amount: Rs.", loanAmount);
    console.log("Credit Score:", creditScore);
    console.log("Existing EMI: Rs.", existingEMI);
    console.log("Loan Eligibility:", loanEligibility);
    console.log("Eligibility Category:", eligibilityCategory);
    console.log("Remarks:", remarks);

    console.log("Note: This is only a preliminary assessment.");
}