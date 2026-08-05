console.log("=== TASK 11: DYNAMIC SORT FUNCTION ===");

function dynamicSort(array, sortKey, direction = "asc") {
  // Create shallow copy to prevent mutating original array
  const copy = [...array];

  return copy.sort((a, b) => {
    let valA = a[sortKey];
    let valB = b[sortKey];

    // Handle String comparisons case-insensitively
    if (typeof valA === "string") valA = valA.toLowerCase();
    if (typeof valB === "string") valB = valB.toLowerCase();

    if (valA < valB) {
      return direction === "asc" ? -1 : 1;
    }
    if (valA > valB) {
      return direction === "asc" ? 1 : -1;
    }
    return 0;
  });
}

// Test Data
const sampleItems = [
  { name: "Banana", price: 40 },
  { name: "Apple", price: 120 },
  { name: "Cherry", price: 90 }
];

console.log("Sorted by Name (ASC):", dynamicSort(sampleItems, "name", "asc"));
console.log("Sorted by Price (DESC):", dynamicSort(sampleItems, "price", "desc"));