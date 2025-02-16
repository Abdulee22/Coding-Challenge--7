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
    