const test = require('./controller/test'); 
const home_search = require('./controller/home_search');
const shop_list = require('./controller/shop_list');
const auth = require('./controller/auth')


const restaurantData = require('../data/restaurant_data')();  // Import restaurant data

module.exports = (app) => {
  app.use('/api/test', test);
  app.use('/api/home_search', home_search);
  app.use('/api/shop_list', shop_list);
  app.use('/api/auth', auth);

  // Route to fetch all restaurants
  app.get('/api/restaurants', (req, res) => {
    if (restaurantData.restaurants) {
      res.success(restaurantData.restaurants);  // Return the restaurant data
    } else {
      res.fail('No restaurants found', 404);
    }
  });

  // Route to fetch restaurant details by ID
  app.get('/api/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = restaurantData.restaurants.find(r => r.id === restaurantId);

    if (restaurant) {
      res.success(restaurant);
    } else {
      res.fail('Restaurant not found', 404);
    }
  });
};
