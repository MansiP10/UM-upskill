let arr = [4, 8, 2, 11, 6, 7, 10];
let max = arr[0];
let sum = arr[0];
let odd_number = 0;

console.log(`Ex Array:- ${arr}`);
if(arr[0] % 2 != 0){
    odd_number = 1;
}
//logic of finding max number
for (let index = 1; index < arr.length; index++) {
    if(arr[index]> max){
        max = arr[index];
    }
    //logic of sum of element
    sum += arr[index];
    
    //logic of odd element count
    if(arr[index] % 2 != 0)
    {
        odd_number = odd_number + 1;
    }
}
console.log(`Maximum number: ${max}`);
console.log(`Sum of all elements: ${sum}`);
console.log(`Count of odd numbers: ${odd_number}`);