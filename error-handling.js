// 1.
function sum(array) {
    if(!array) {
        throw new TypeError('arg must be an array');
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

try {
    let res = sum(null);
    console.log(res);
} catch(e) {
    console.error(`TypeError: ${e.message}`); // "TypeError: arg must be an array"
    // console.error(e);  // console.log(e) also works
}   // ${e.message} == 'arg must be an array'

console.log('done error catching');

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
