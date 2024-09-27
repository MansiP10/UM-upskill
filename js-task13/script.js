let n = 153;
let actual_number = n;

console.log(`Number :- ${actual_number}`);
// calculate sum of digit
let remainder, sumOfDigits = 0;
let armstrong  = 0;
let isPrime = true;
while(n)
{
    remainder = n % 10;
    sumOfDigits = sumOfDigits + remainder;
    n = Math.floor(n/10);
    // calculate armstrong of number
    armstrong = armstrong + Math.pow(remainder,3);
}

console.log(`Sum of its digits: ${sumOfDigits}`);

if(armstrong == actual_number){
    console.log(`Is it an Armstrong number?  Yes`);
}else{
    console.log(`Is it an Armstrong number?  No`);
}

// Check if number is prime
if (actual_number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(actual_number); i++) {
        if (actual_number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Output whether n is prime
if (isPrime) {
    console.log(`Is it a prime number? Yes`);
} else {
    console.log(`Is it a prime number? No`);
}

// Print all factors of number
let factors = '';
for (let i = 1; i <= actual_number; i++) {
    if (actual_number % i === 0) {
        factors += i + ', '; 
    }
}
// Remove the trailing comma and space
if (factors.length > 0) {
    factors = factors.slice(0, -2);
}
console.log(`Factors: ${factors}`);