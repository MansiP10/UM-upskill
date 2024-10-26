// Q1: Squaring Array Elements with Map
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Q2: Grading System with Ternary Operators
// function calculateGrade(score) {
//     return score >= 90 ? 'A'
//            : score >= 80 ? 'B'
//            : score >= 70 ? 'C'
//            : score >= 60 ? 'D'
//            : 'F';
//   }
//   console.log(calculateGrade(85)); // Output: B

// Q3: Car Object and Destructuring
// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2023
//   };
  
//   function changeYear(car, newYear) {
//     car.year = newYear;
//   }
//   changeYear(car, 2024);
//   const { model, year } = car;
//   console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2024

// Q4: Filtering Prime Numbers
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i * i <= num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeNumbers = numbers.filter(isPrime);
//   console.log(primeNumbers); // Output: [2, 3, 5, 7]


// Q5: Use Cases of Map, Filter, and Reduce

// Map:
// Transforming elements of an array (e.g., squaring, converting to uppercase)
// Creating new arrays based on existing ones
// Filter:
// Extracting specific elements from an array based on a condition
// Creating subsets of arrays
// Reduce:
// Accumulating values from an array (e.g., summing, finding the maximum)
// Performing complex calculations on arrays

// Q6: Asynchronous Fetch with Async/Await
// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData();


// Q7: Nested Object and Optional Chaining

const person = {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };
  
  const phoneNumber = person.contact?.phone;
  console.log(phoneNumber); // Output: undefined (if contact.phone doesn't exist)