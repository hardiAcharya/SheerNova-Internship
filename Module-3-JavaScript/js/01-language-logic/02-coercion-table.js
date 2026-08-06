// TASK 2: TYPE COERCION TABLE

console.log("=== TASK 2: TYPE COERCION TABLE ===");

const coercionData = [
  { Expression: '5 + "5"', Actual: 5 + "5", Explanation: "Number + String = Concatenation" },
  { Expression: '5 - "2"', Actual: 5 - "2", Explanation: "String '2' converts to number 2" },
  { Expression: '5 * "3"', Actual: 5 * "3", Explanation: "String converts to number" },
  { Expression: 'true + 1', Actual: true + 1, Explanation: "true converts to 1" },
  { Expression: 'false + 5', Actual: false + 5, Explanation: "false converts to 0" },
  { Expression: 'null + 1', Actual: null + 1, Explanation: "null converts to 0" },
  { Expression: 'undefined + 1', Actual: undefined + 1, Explanation: "undefined converts to NaN" },
  { Expression: '[] + []', Actual: '""', Explanation: "Empty arrays convert to empty string" },
  { Expression: '[] + {}', Actual: [] + {}, Explanation: "[] -> '' and {} -> '[object Object]'" },
  { Expression: '"10" == 10', Actual: "10" == 10, Explanation: "Loose equality converts string to number" },
  { Expression: '"10" === 10', Actual: "10" === 10, Explanation: "Strict equality checks types without conversion" },
  { Expression: '!""', Actual: !"", Explanation: "Empty string is falsy" },
  { Expression: '!"Hello"', Actual: !"Hello", Explanation: "Non-empty string is truthy" },
  { Expression: 'true == 1', Actual: true == 1, Explanation: "true converts to 1" },
  { Expression: 'false == 0', Actual: false == 0, Explanation: "false converts to 0" }
];

console.table(coercionData);