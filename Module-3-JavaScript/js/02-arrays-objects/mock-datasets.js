// 20 Product Objects
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000, rating: 4.5, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 25000, rating: 4.8, inStock: true },
  { id: 3, name: "Headphones", category: "Electronics", price: 3000, rating: 4.2, inStock: false },
  { id: 4, name: "Smartwatch", category: "Electronics", price: 5000, rating: 3.9, inStock: true },
  { id: 5, name: "T-Shirt", category: "Clothing", price: 800, rating: 4.1, inStock: true },
  { id: 6, name: "Jeans", category: "Clothing", price: 2000, rating: 4.3, inStock: true },
  { id: 7, name: "Jacket", category: "Clothing", price: 4500, rating: 4.7, inStock: false },
  { id: 8, name: "Sneakers", category: "Footwear", price: 3500, rating: 4.6, inStock: true },
  { id: 9, name: "Formal Shoes", category: "Footwear", price: 2800, rating: 4.0, inStock: true },
  { id: 10, name: "Slippers", category: "Footwear", price: 500, rating: 3.5, inStock: true },
  { id: 11, name: "Coffee Maker", category: "Appliances", price: 4000, rating: 4.4, inStock: true },
  { id: 12, name: "Microwave", category: "Appliances", price: 8000, rating: 4.2, inStock: false },
  { id: 13, name: "Toaster", category: "Appliances", price: 1500, rating: 3.8, inStock: true },
  { id: 14, name: "Blender", category: "Appliances", price: 2200, rating: 4.1, inStock: true },
  { id: 15, name: "Fiction Novel", category: "Books", price: 400, rating: 4.9, inStock: true },
  { id: 16, name: "Tech Guide", category: "Books", price: 900, rating: 4.6, inStock: true },
  { id: 17, name: "Notebook", category: "Stationery", price: 120, rating: 4.3, inStock: true },
  { id: 18, name: "Pen Set", category: "Stationery", price: 250, rating: 4.5, inStock: true },
  { id: 19, name: "Desk Organizer", category: "Stationery", price: 600, rating: 3.9, inStock: false },
  { id: 20, name: "Backpack", category: "Accessories", price: 1800, rating: 4.4, inStock: true }
];

// 10 Order Objects
const orders = [
  { id: 101, product: "Laptop", quantity: 1, price: 60000 },
  { id: 102, product: "Smartphone", quantity: 2, price: 25000 },
  { id: 103, product: "T-Shirt", quantity: 5, price: 800 },
  { id: 104, product: "Sneakers", quantity: 1, price: 3500 },
  { id: 105, product: "Laptop", quantity: 1, price: 60000 },
  { id: 106, product: "Headphones", quantity: 3, price: 3000 },
  { id: 107, product: "Coffee Maker", quantity: 1, price: 4000 },
  { id: 108, product: "Smartphone", quantity: 1, price: 25000 },
  { id: 109, product: "Notebook", quantity: 10, price: 120 },
  { id: 110, product: "T-Shirt", quantity: 2, price: 800 }
];

// CommonJS export for Node.js testing environment
if (typeof module !== "undefined") {
  module.exports = { products, orders };
}