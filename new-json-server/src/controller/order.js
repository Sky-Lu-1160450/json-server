const fs = require('fs');
const path = require('path');

// File path for persisting orders
const ordersFilePath = path.join(__dirname, '../../data/orders.json');

// Load existing orders from the JSON file (if exists)
let orders = [];
if (fs.existsSync(ordersFilePath)) {
  const fileContent = fs.readFileSync(ordersFilePath, 'utf-8');
  orders = JSON.parse(fileContent) || [];
}

// Function to save orders to the file
function saveOrdersToFile() {
  fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
}

// Place an order
module.exports.placeOrder = (req, res) => {
    // console.log('Received order:', req.body);
  
  const { items, totalPrice, deliveryFee } = req.body;

  // Validate the incoming data
  if (!items || items.length === 0) {
    return res.fail('No items in the order.', 400);
  }

  // Create a new order
  const newOrder = {
    id: orders.length + 1,
    items,
    totalPrice,
    deliveryFee,
    status: 'Pending',
    createdAt: new Date(),
  };

  // Add the new order to the orders array
  orders.push(newOrder);

  // Save updated orders to the file
  fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

  // Respond with success
  res.success({ message: 'Order placed successfully.', orderId: newOrder.id });
};

// Get all orders (for admin dashboard or order history)
module.exports.getAllOrders = (req, res) => {
  res.success(orders);
};
