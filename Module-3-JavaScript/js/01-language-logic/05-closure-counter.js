console.log("=== TASK 5: CLOSURE COUNTER ===");

function createCounter() {
  // Private variable - cannot be accessed or changed directly from outside
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

console.log("Initial Value:", counter.getValue()); // 0
console.log("Increment:", counter.increment());     // 1
console.log("Increment:", counter.increment());     // 2
console.log("Decrement:", counter.decrement());     // 1

// Direct tampering check:
console.log("Direct count property:", counter.count); // undefined (Safe!)

/*
  EXPLANATION IN COMMENTS:
  Why does 'count' survive between calls?
  - When 'createCounter' executes, it creates a local scope containing 'count'.
  - The inner functions (increment, decrement, getValue) maintain a reference (Closure) 
    to their lexical parent scope even after 'createCounter()' has finished executing.
  - Because references to these inner methods exist in the 'counter' object, Garbage Collection 
    does NOT delete the 'count' variable from memory.
*/