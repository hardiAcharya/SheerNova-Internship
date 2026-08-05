console.log("=== TASK 9: DEEP CLONE FUNCTION ===");

// Deep Clone function without structuredClone
function deepClone(obj) {
  // Null or primitive types return directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  // Handle Object
  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
}

// --- PROOF OF INDEPENDENCE ---
const originalUser = {
  name: "Amit",
  details: {
    city: "Delhi",
    skills: ["JS", "HTML"]
  }
};

// Create deep clone
const clonedUser = deepClone(originalUser);

// Modify cloned object nested properties
clonedUser.name = "Suresh";
clonedUser.details.city = "Mumbai";
clonedUser.details.skills.push("CSS");

console.log("Original User (Untouched):", originalUser);
console.log("Cloned User (Modified):", clonedUser);
console.log("Is nested object reference same?:", originalUser.details === clonedUser.details); // false