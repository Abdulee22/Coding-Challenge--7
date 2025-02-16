// Task 1 - Customer Invoice Calculation //
function calculateInvoice(subtotal, taxRate, discount) { // function
let total = (subtotal + (subtotal * taxRate)) - discount; // formula
return `Total Invoice: $${total.toFixed(2)}`;}
console.log(calculateInvoice(100, 0.08, 5)); // output 103.00
console.log(calculateInvoice(500, 0.1, 20)); // output 530.00

// Task 2 - Employee Hourly Wage Calculation //
const calculateHourlyWage = function(salary, hoursPerWeek) { // Function
 let hourlyWage = salary / (hoursPerWeek * 52); // Formula
return `Hourly Wage: $${hourlyWage.toFixed(2)}`;};
console.log(calculateHourlyWage(52000, 40)); // output 25.00
console.log(calculateHourlyWage(75000, 35)); // output 41.21
    
    