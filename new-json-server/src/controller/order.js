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
    const { items, totalPrice, deliveryFee, userId } = req.body;

  console.log('Received order request body:', req.body);
  if (!userId) {
    console.error('User ID is missing from request');
    return res.status(400).json({ message: 'User ID is required' });
  }

  // Validate the incoming data
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in the order.' });
  }

  // Create a new order
  const newOrder = {
    id: orders.length + 1,
    items,
    totalPrice,
    deliveryFee,
    status: 'Pending',
    createdAt: new Date(),
    userId,
  };

  // Add the new order to the orders array
  orders.push(newOrder);

  // Save updated orders to the file
  saveOrdersToFile();  // Use the saveOrdersToFile function here

  // Respond with success
  res.status(201).json({
    data: {
      message: 'Order placed successfully.',
      orderId: newOrder.id
    },
    code: 0
  });
};

// Get all orders (for admin dashboard or order history)
module.exports.getAllOrders = (req, res) => {
  res.status(200).json(orders);
};


// Get orders for a specific user
module.exports.getUserOrders = (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required', code: 1 });
  }

  // Filter orders by userId
  const userOrders = orders.filter(order => order.userId === userId);

  if (userOrders.length > 0) {
    return res.status(200).json({ data: userOrders, code: 0 });
  } else {
    return res.status(404).json({ message: 'No orders found for this user', code: 1 });
  }
};
