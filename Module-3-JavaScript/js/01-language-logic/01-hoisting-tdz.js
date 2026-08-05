// TASK 01: Hoisting and Temporal Dead Zone (TDZ)

// ==========================================
// 1. VAR HOISTING
// ==========================================
console.log("--- 1. var Hoisting ---");

// Prediction: undefined (kisi variable ko declare hone se pehle print karne par undefined milta hai)
console.log("Before declaration var a:", a); 

var a = 10;

// Prediction: 10 (Value assign hone ke baad 10 print hoga)
console.log("After declaration var a:", a);


// ==========================================
// 2. LET AND TEMPORAL DEAD ZONE (TDZ)
// ==========================================
console.log("--- 2. let and TDZ ---");

try {
  // Prediction: Error aayega (let hoist hota hai par use declare hone se pehle access nahi kar sakte)
  console.log(b); 
} catch (error) {
  console.log("Error caught for let b:", error.message);
}

let b = 20;
// Prediction: 20
console.log("After declaration let b:", b);


// ==========================================
// 3. CONST AND TEMPORAL DEAD ZONE (TDZ)
// ==========================================
console.log("--- 3. const and TDZ ---");

try {
  // Prediction: Error aayega (const bhi TDZ follow karta hai)
  console.log(c);
} catch (error) {
  console.log("Error caught for const c:", error.message);
}

const c = 30;
// Prediction: 30
console.log("After declaration const c:", c);


// ==========================================
// 4. FUNCTION DECLARATIONS VS EXPRESSIONS
// ==========================================
console.log("--- 4. Function Hoisting ---");

// Normal Function: Banne se pehle bhi call kar sakte hain
myNormalFunction(); 

function myNormalFunction() {
  console.log("Normal function definition se pehle chal gaya!");
}

// Variable Function: Pehle call karne par error aayega
try {
  myExprFunction();
} catch (error) {
  console.log("Error for Variable Function:", error.message);
}

var myExprFunction = function () {
  console.log("Variable function chala!");
};


// ==========================================
// 5. BLOCK SCOPE AND SHADOWING
// ==========================================
console.log("--- 5. Block Scope ---");

let x = "Outside Block";

if (true) {
  try {
    // Prediction: Error! Block ke andar waala 'let x' pehle check hota hai jo ki abhi TDZ me hai
    console.log(x);
  } catch (error) {
    console.log("Error inside block:", error.message);
  }

  let x = "Inside Block";
  console.log("Inside block x value:", x);
}