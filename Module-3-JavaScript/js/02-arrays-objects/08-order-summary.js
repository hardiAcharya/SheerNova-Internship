const dataset = typeof require !== "undefined" ? require("./mock-datasets.js") : window;
const orders = dataset.orders;

console.log("=== TASK 8: ORDER SUMMARY FUNCTION ===");

function generateOrderSummary(orderList) {
  if (!orderList || orderList.length === 0) return null;

  // 1. Total Revenue & Total Orders
  const orderCount = orderList.length;
  const totalRevenue = orderList.reduce((sum, order) => sum + (order.price * order.quantity), 0);
  
  // 2. Average Order Value
  const averageOrderValue = totalRevenue / orderCount;

  // 3. Find Best Selling Product by total quantity sold
  const salesMap = {};
  for (let order of orderList) {
    if (salesMap[order.product]) {
      salesMap[order.product] += order.quantity;
    } else {
      salesMap[order.product] = order.quantity;
    }
  }

  let bestSellingProduct = "";
  let maxQuantitySold = 0;

  for (let product in salesMap) {
    if (salesMap[product] > maxQuantitySold) {
      maxQuantitySold = salesMap[product];
      bestSellingProduct = product;
    }
  }

  return {
    totalRevenue: totalRevenue,
    orderCount: orderCount,
    averageOrderValue: Number(averageOrderValue.toFixed(2)),
    bestSellingProduct: bestSellingProduct
  };
}

console.log("Summary Result:", generateOrderSummary(orders));