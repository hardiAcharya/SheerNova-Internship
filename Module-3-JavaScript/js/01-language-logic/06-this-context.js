console.log("=== TASK 6: THIS CONTEXT DEMO ===");

// 1. Method Context
const user = {
  name: "Rahul",
  showName: function() {
    console.log("1. Method 'this.name':", this.name);
  }
};
user.showName(); // Output: Rahul ('this' points to 'user' object)

// 2. Standalone Function Context
function standaloneFunc() {
  console.log("2. Standalone Function 'this':", this); 
  // Output: Window (in browser) or Object [global] (in Node.js)
}
standaloneFunc();

// 3. Arrow Function Context
const arrowObject = {
  name: "Priya",
  showName: () => {
    console.log("3. Arrow Function 'this.name':", this.name); 
    // Output: undefined (Arrow functions don't have their own 'this', they inherit outer scope)
  }
};
arrowObject.showName();

// 4. Broken Event Handler / Lost Context Example & Fix with bind()
const timer = {
  seconds: 0,
  start: function() {
    console.log("Initial seconds:", this.seconds);

    // Broken standalone function callback
    function printTick() {
      console.log("Broken 'this.seconds':", this.seconds); // undefined
    }
    
    // Fixed using bind()
    const fixedPrintTick = printTick.bind(this);
    fixedPrintTick(); // Output: 0
  }
};

timer.start();