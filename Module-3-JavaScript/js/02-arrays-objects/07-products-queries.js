// Load mock dataset if running in Node environment
const dataset = typeof require !== "undefined" ? require("./mock-datasets.js") : window;
const products = dataset.products;

console.log("=== TASK 7: PRODUCTS QUERIES (NO FOR LOOPS) ===");

// 1. Total Inventory Value (reduce)
const totalInventoryValue = products.reduce((total, p) => total + p.price, 0);

// 2. Average Price (reduce)
const averagePrice = totalInventoryValue / products.length;

// 3. Count Per Category (reduce)
const countPerCategory = products.reduce((acc, p) => {
  acc[p.category] = (acc[p.category] || 0) + 1;
  return acc;
}, {});

// 4. All Items Under Price 2000 (filter)
const itemsUnder2000 = products.filter(p => p.price < 2000);

// 5. Product Names as Comma-Joined String (map & join)
const productNamesString = products.map(p => p.name).join(", ");

// 6. Group Products Keyed by Category (reduce)
const groupByCategory = products.reduce((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p);
  return acc;
}, {});

// 7. Top 3 Items by Rating (sort & slice)
const topThreeByRating = [...products].sort((a, b) => b.rating - a.rating).slice(0, 3);

// 8. Find Item by ID 5 (find)
const itemWithId5 = products.find(p => p.id === 5);

// 9. Are all products rated above 3.0? (every)
const allAbove3 = products.every(p => p.rating > 3.0);

// 10. Is any product out of stock? (some)
const anyOutOfStock = products.some(p => p.inStock === false);

// 11. Extract Array of Names and Prices only (map)
const namesAndPrices = products.map(p => ({ name: p.name, price: p.price }));

// 12. Only Electronics Category Products (filter)
const electronicsOnly = products.filter(p => p.category === "Electronics");

// 13. Most Expensive Item Overall (reduce)
const mostExpensiveItem = products.reduce((max, p) => p.price > max.price ? p : max, products[0]);

// 14. Products Sorted by Price Low to High (sort)
const sortedByPriceAsc = [...products].sort((a, b) => a.price - b.price);

// 15. Most Expensive Item Per Category (reduce)
const mostExpensivePerCategory = products.reduce((acc, p) => {
  if (!acc[p.category] || p.price > acc[p.category].price) {
    acc[p.category] = p;
  }
  return acc;
}, {});

// --- Log Outputs ---
console.log("1. Total Inventory Value:", totalInventoryValue);
console.log("2. Average Price:", averagePrice.toFixed(2));
console.log("3. Count Per Category:", countPerCategory);
console.log("4. Items Under 2000:", itemsUnder2000.length, "items found");
console.log("5. Product Names String:", productNamesString.substring(0, 50) + "...");
console.log("6. Group By Category Keys:", Object.keys(groupByCategory));
console.log("7. Top 3 Rated Items:", topThreeByRating.map(p => `${p.name} (${p.rating})`));
console.log("8. Find ID 5:", itemWithId5.name);
console.log("9. All above rating 3.0?:", allAbove3);
console.log("10. Any out of stock?:", anyOutOfStock);
console.log("11. Sample mapped item:", namesAndPrices[0]);
console.log("12. Electronics Count:", electronicsOnly.length);
console.log("13. Most Expensive Item:", mostExpensiveItem.name, `(₹${mostExpensiveItem.price})`);
console.log("14. Cheapest Product:", sortedByPriceAsc[0].name);
console.log("15. Most Expensive Per Category:", mostExpensivePerCategory);