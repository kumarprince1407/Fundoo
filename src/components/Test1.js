//take an array of elements and print the values of each element of the array after every 3 seconds
const array1 = [
  "apple",
  "orange",
  "mango",
  "banana",
  "pineapple",
  "strawberry",
  "guava",
  "litchi",
];
let index = 0;

function printArray() {
  if (index < array1.length) {
    console.log(`Element ${[index + 1]} : ${array1[index]}`);
    index++;
    setTimeout(printArray, 3000);
  }
}
printArray(index);
