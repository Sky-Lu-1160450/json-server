const test = require('./controller/test'); 
const home_search = require('./controller/home_search');
const shop_list = require('./controller/shop_list');
const auth = require('./controller/auth');
const orderController = require('./controller/order');  // Import the order controller

const restaurantData = require('../data/restaurant_data')();  // Import restaurant data
const cors = require('cors');
module.exports = (app) => {
  // Other routes...
  app.use(cors());
  app.use('/api/test', test);
  app.use('/api/home_search', home_search);
  app.use('/api/shop_list', shop_list);
  app.post('/api/auth/login', auth.login);     // Handle login requests
  app.post('/api/auth/register', auth.register);  // Handle registration requests
  app.post('/api/auth/updateAddress', auth.updateAddress);

  // Restaurant routes
  app.get('/api/restaurants', (req, res) => {
    if (restaurantData.restaurants) {
      res.success(restaurantData.restaurants);  // Return the restaurant data
    } else {
      res.fail('No restaurants found', 404);
    }
  });

  app.get('/api/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = restaurantData.restaurants.find(r => r.id === restaurantId);

    if (restaurant) {
      res.success(restaurant);
    } else {
      res.fail('Restaurant not found', 404);
    }
  });

  // Order routes
  app.post('/api/order/place', orderController.placeOrder);    // Place an order
  app.get('/api/order/all', orderController.getAllOrders);     // Get all orders
  app.get('/api/order/user/:userId', orderController.getUserOrders);
};
