//Implementing curring function using map and reduce

//Declaring the array
const arr1 = [2, 5, 7];

//Multiplication function
const multiply = (num) => num * 2;

//Sum function
const sum = (x, y) => x + y;

//Curry Sum
const currySum = (x) => (y) => x + y;

//Map function
const multipliedArr = arr1.map(multiply);

//Reduce function
const arraySum = multipliedArr.reduce(sum);
console.log(`Array sum: ${arraySum}`);
