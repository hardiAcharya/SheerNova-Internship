// TASK 01: Hoisting and Temporal Dead Zone (TDZ)

console.log("--- 1. var Hoisting ---");

console.log("Before declaration var a:", a); 

var a = 10;

console.log("After declaration var a:", a);


console.log("--- 2. let and TDZ ---");

try {
  console.log(b); 
} catch (error) {
  console.log("Error caught for let b:", error.message);
}

let b = 20;
console.log("After declaration let b:", b);


console.log("--- 3. const and TDZ ---");

try {
  console.log(c);
} catch (error) {
  console.log("Error caught for const c:", error.message);
}

const c = 30;
console.log("After declaration const c:", c);


console.log("--- 4. Function Hoisting ---");

myNormalFunction(); 

function myNormalFunction() {
  console.log("Normal function definition se pehle chal gaya!");
}

try {
  myExprFunction();
} catch (error) {
  console.log("Error for Variable Function:", error.message);
}

var myExprFunction = function () {
  console.log("Variable function chala!");
};


console.log("--- 5. Block Scope ---");

let x = "Outside Block";

if (true) {
  try {
    console.log(x);
  } catch (error) {
    console.log("Error inside block:", error.message);
  }

  let x = "Inside Block";
  console.log("Inside block x value:", x);
}