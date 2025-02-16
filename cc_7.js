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
    
// Task 3 - Customer Loyalty Discount //
const calculateLoyaltyDiscount = (amount, years) => {
let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; // function
let discountedPrice = amount * (1 - discountRate); // Discount
return `Discounted Price: $${discountedPrice.toFixed(2)}`;};
console.log(calculateLoyaltyDiscount(100, 6)); // output 85.00
console.log(calculateLoyaltyDiscount(200, 2)); // output 190.00
        
// Task 4 - Product Shipping Cost Calculation //
function calculateShippingCost(weight, location, expedited = false) { // Function
let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight); // Fees
if (expedited) baseCost += 10;
 return `Shipping Cost: $${baseCost.toFixed(2)}`;}
console.log(calculateShippingCost(10, "USA", true)); // output 20.00
console.log(calculateShippingCost(5, "Canada", false)); // output 13.50

// Task 5 - Business Loan Interest Calculation //
function calculateLoanInterest(principal, rate, years) { // Function
let interest = principal * rate * years; // Interest Formula
return `Total Interest: $${interest.toFixed(2)}`;}
console.log(calculateLoanInterest(1000, 0.05, 3)); // output 150.00
console.log(calculateLoanInterest(5000, 0.07, 5)); // output 1750.00

// Task 6 - Filtering High-Value Transactions //
let transactions = [500, 1200, 3000, 800, 2200]; // Values
function filterHighValueTransactions(transactions, filterFunction) { // Function
return transactions.filter(filterFunction);}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // output [1200, 3000, 2200]

// Task 7 - Budget Tracker //
function createBudgetTracker() { // Function
let balance = 0;
return function(expense) 
{balance -= expense; // Expenses
return `Current Balance: $${balance}`;};}
let budget = createBudgetTracker();
console.log(budget(300)); // output -300
console.log(budget(200)); // output -500
    

    
    