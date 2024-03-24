// Function to calculate PAYE (Tax) based on the provided tax rates
function calculatePAYE(grossSalary) {
    let tax = 0;

    if (grossSalary <= 24000) {
        tax = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (0.25 * (grossSalary - 24000));
    } else if (grossSalary <= 41905) {
        tax = 5058.25 + (0.3 * (grossSalary - 32333));
    } else if (grossSalary <= 55833) {
        tax = 8743.25 + (0.325 * (grossSalary - 41905));
    } else if (grossSalary <= 103333) {
        tax = 16576.75 + (0.35 * (grossSalary - 55833));
    } else {
        tax = 29776.75 + (0.45 * (grossSalary - 103333));
    }

    return tax;
}

// Function to calculate NHIF deductions based on the provided rates
function calculateNHIF(grossSalary) {
    let nhifDeduction = 0;

    if (grossSalary < 6000) {
        nhifDeduction = 150;
    } else if (grossSalary <= 8000) {
        nhifDeduction = 300;
    } else if (grossSalary <= 12000) {
        nhifDeduction = 400;
    } else if (grossSalary <= 15000) {
        nhifDeduction = 500;
    } else if (grossSalary <= 20000) {
        nhifDeduction = 600;
    } else if (grossSalary <= 25000) {
        nhifDeduction = 750;
    } else if (grossSalary <= 30000) {
        nhifDeduction = 850;
    } else if (grossSalary <= 35000) {
        nhifDeduction = 900;
    } else if (grossSalary <= 40000) {
        nhifDeduction = 950;
    } else if (grossSalary <= 45000) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 50000) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 60000) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 70000) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 80000) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 90000) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 100000) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    return nhifDeduction;
}

// Function to calculate NSSF deductions (assuming 6% contribution from employee)
function calculateNSSF(grossSalary) {
    const nssfDeduction = 0.06 * grossSalary;
    return nssfDeduction;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let payee = calculatePAYE(grossSalary);
    let nhifDeductions = calculateNHIF(grossSalary);
    let nssfDeductions = calculateNSSF(grossSalary);

    let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    console.log("Gross Salary: KES " + grossSalary);
    console.log("PAYE (Tax): KES " + payee);
    console.log("NHIF Deductions: KES " + nhifDeductions);
    console.log("NSSF Deductions: KES " + nssfDeductions);
    console.log("Net Salary: KES " + netSalary);
}

// Test the function with example inputs
let basicSalary = 50000;
let benefits = 10000;
calculateNetSalary(basicSalary, benefits);
