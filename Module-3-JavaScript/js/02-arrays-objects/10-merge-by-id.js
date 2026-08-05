console.log("=== TASK 10: MERGE ARRAYS BY ID (JOIN) ===");

function mergeById(arr1, arr2) {
  const mergedResult = [];

  for (let item1 of arr1) {
    // Find matching object in second array by id
    const matchingItem = arr2.find(item2 => item2.id === item1.id);

    // Merge properties using Object.assign or Spread operator
    if (matchingItem) {
      mergedResult.push({ ...item1, ...matchingItem });
    } else {
      mergedResult.push({ ...item1 });
    }
  }

  return mergedResult;
}

// Test Datasets
const usersList = [
  { id: 1, name: "Aarav", role: "Developer" },
  { id: 2, name: "Neha", role: "Designer" }
];

const salaryDetails = [
  { id: 1, salary: 50000, city: "Bangalore" },
  { id: 2, salary: 60000, city: "Pune" }
];

console.log("Merged Joined Output:", mergeById(usersList, salaryDetails));