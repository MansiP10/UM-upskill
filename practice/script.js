// Number1 = parseInt(prompt("Enter number 1:"));
// Number2 = parseInt(prompt("Enter number 2:"));

// sum = Number1 + Number2;
// difference = Number1 - Number2;
// prod = Number1 * Number2;
// mod = Number1 % Number2;

// alert('Sum is '+ sum);
// alert('Difference is '+difference);
// alert('Product is '+prod);
// alert('mod is'+mod);

// let age = parseInt(prompt("Please enter your age:"));
// let stmt= '';
//     if (age < 18) {
//          stmt = "You are a minor.";
//     } else if (age >= 18 && age < 65) {
//         stmt = "You are an adult.";
//     } else {
//         stmt = "You are a senior citizen.";
//     }
//     alert(stmt);

// let num1 = 0;
// let num2 = 1;

// console.log("The first 10 Fibonacci numbers are:");

// for (let i = 0; i < 10; i++) {
//     console.log(num1);
//     let nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
// }


function calculateRectangleArea(length, width) {
    return length * width;
}

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

let rectangleLength = parseInt(prompt('Enter length:'));
let rectangleWidth = parseInt(prompt('Enter width:'));
rectangle = calculateRectangleArea(rectangleLength, rectangleWidth);
alert("Area of Rectangle: "+ rectangle );

let circleRadius = parseInt(prompt('Enter radius:'));
circle = calculateCircleArea(circleRadius);
alert("Area of Circle: "+circle);

let triangleBase = parseInt(prompt('Enter Base:'));
let triangleHeight = parseInt(prompt('Enter Height:'));
rectangle = calculateTriangleArea(triangleBase, triangleHeight);
alert("Area of Triangle: "+rectangle);
