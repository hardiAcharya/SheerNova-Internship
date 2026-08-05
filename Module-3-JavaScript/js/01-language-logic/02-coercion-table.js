console.log("=== TASK 2: TYPE COERCION TABLE ===");

// 1. Array of expressions with predictions and explanations
const coercionData = [
  { expr: '5 + "5"', predicted: "55", actual: 5 + "5", reason: "Number + String = Concatenation" },
  { expr: '5 - "2"', predicted: 3, actual: 5 - "2", reason: "String '2' converts to number 2" },
  { expr: '5 * "3"', predicted: 15, actual: 5 * "3", reason: "String converts to number" },
  { expr: 'true + 1', predicted: 2, actual: true + 1, reason: "true converts to 1" },
  { expr: 'false + 5', predicted: 5, actual: false + 5, reason: "false converts to 0" },
  { expr: 'null + 1', predicted: 1, actual: null + 1, reason: "null converts to 0" },
  { expr: 'undefined + 1', predicted: NaN, actual: undefined + 1, reason: "undefined converts to NaN" },
  { expr: '[] + []', predicted: '""', actual: '""', reason: "Empty arrays convert to empty string" },
  { expr: '[] + {}', predicted: "[object Object]", actual: [] + {}, reason: "[] -> '' and {} -> '[object Object]'" },
  { expr: '"10" == 10', predicted: true, actual: "10" == 10, reason: "Loose equality converts string to number" },
  { expr: '"10" === 10', predicted: false, actual: "10" === 10, reason: "Strict equality checks types without conversion" },
  { expr: '!""', predicted: true, actual: !"", reason: "Empty string is falsy" },
  { expr: '!"Hello"', predicted: false, actual: !"Hello", reason: "Non-empty string is truthy" },
  { expr: 'true == 1', predicted: true, actual: true == 1, reason: "true converts to 1" },
  { expr: 'false == 0', predicted: true, actual: false == 0, reason: "false converts to 0" }
];

// 2. Simple transformation for clean console.table output
const tableResult = coercionData.map((item, index) => {
  const isMatch = String(item.predicted) === String(item.actual);
  
  return {
    "S.No": index + 1,
    "Expression": item.expr,
    "Predicted": String(item.predicted),
    "Actual": String(item.actual),
    "Status": isMatch ? "Match" : "Mismatch",
    "Explanation": item.reason
  };
});

// 3. Print the table to console
console.table(tableResult);