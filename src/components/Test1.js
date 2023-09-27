//Function currying

//Original function
function product(x, y) {
  return x * y;
}

//Applying currying to the above function
function curryProduct(x) {
  return function (y) {
    return x * y;
  };
}

//We need to pass only one argument in the new function
const newProduct = curryProduct(2);
console.log(`New Product: ${newProduct(4)}`);
