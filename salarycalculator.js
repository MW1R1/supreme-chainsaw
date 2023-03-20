let PAYEE = 0;
const basicSalary = 50000; // example value
const benefits = 10000; // example value
const grossSalary = basicSalary + benefits;

if (grossSalary <= 24000) {
  PAYEE = 0;
} else if (grossSalary <= 40000) {
  PAYEE = (grossSalary - 24000) * 0.1;
} else if (grossSalary <= 80000) {
  PAYEE = 1600 + (grossSalary - 40000) * 0.2;
} else if (grossSalary <= 120000) {
  PAYEE = 7600 + (grossSalary - 80000) * 0.25;
} else if (grossSalary <= 160000) {
  PAYEE = 13600 + (grossSalary - 120000) * 0.3;
} else if (grossSalary <= 200000) {
  PAYEE = 22400 + (grossSalary - 160000) * 0.32;
} else {
  PAYEE = 31200 + (grossSalary - 200000) * 0.34;
}
//NHIF CALCULATION
const NHIF_RATES = [150, 300, 400, 500, 600, 750, 850, 900, 950, 1000, 1100, 1200];
const NHIF_MAX = 12000;
let NHIF = 0;

if (grossSalary < 6000) {
  NHIF = 150;
} else if (grossSalary <= 8000) {
  NHIF = 300;
} else if (grossSalary <= 12000) {
  NHIF = 400;
} else if (grossSalary <= 15000) {
  NHIF = 500;
} else if (grossSalary <= 20000) {
  NHIF = 600;
} else if (grossSalary <= 25000) {
  NHIF = 750;
} else if (grossSalary <= 30000) {
  NHIF = 850;
} else if (grossSalary <= 35000) {
  NHIF = 900;
} else if (grossSalary <= 40000) {
  NHIF = 950;
} else if (grossSalary <= 45000) {
  NHIF = 1000;
} else if (grossSalary <= 50000) {
  NHIF = 1100;
} else {
  NHIF = NHIF_MAX;
}
//NSSF CALCULATION
const NSSF_EMPLOYEE_RATE = 0.06;
const NSSF_EMPLOYER_RATE = 0.06;
const NSSF_MAX = 1800;
let NSSF = Math.min(grossSalary * NSSF_EMPLOYEE_RATE, NSSF_MAX);

const deductions = PAYEE + NHIF + NSSF;
const netSalary = grossSalary - deductions;
