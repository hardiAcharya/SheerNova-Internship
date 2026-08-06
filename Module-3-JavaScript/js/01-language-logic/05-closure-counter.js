// TASK 5: CLOSURE COUNTER

console.log("=== TASK 5: CLOSURE COUNTER ===");

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = createCounter();

console.log("Initial Value:", counter.getValue());
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());

/*
  EXPLANATION:
  'count' variable function call ke baad bhi yaad kyu rehta hai?
  
  1. Closure Rule: JavaScript me jab koi andar ka function (jaise increment/decrement) 
     apne bahar ke function (createCounter) ke variable ko use karta hai, 
     toh woh us variable ka reference apne paas save kar leta hai.
     
  2. Memory Safety: Kyunki andar ke functions abhi bhi 'count' ko use kar rahe hain, 
     isliye JavaScript ka Memory Cleaner (Garbage Collector) 'count' variable ko 
     delete nahi karta.
     
  3. Privacy: External code se 'count' ko direct modify nahi kiya ja sakta, 
     sirf increment() aur decrement() functions ke zariye hi badla ja sakta hai.
*/