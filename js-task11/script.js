let principal = 100000;
let r = 5;
let years = 4;
let timesCompounded = 3;

// formula of compound interest
const amount = principal * Math.pow((1 + (r / timesCompounded)), timesCompounded * years);

// Calculate the compound interest earned
const compoundInterest = amount - principal;

//output
console.log(`Total compound interest after ${years} years is: ${compoundInterest}`);
