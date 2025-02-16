// Task 1 - Customer Invoice Calculation //
function calculateInvoice(subtotal, taxRate, discount) { // function
let total = (subtotal + (subtotal * taxRate)) - discount; // formula
return `Total Invoice: $${total.toFixed(2)}`;}
console.log(calculateInvoice(100, 0.08, 5)); // output 103.00
console.log(calculateInvoice(500, 0.1, 20)); // output 530.00
    