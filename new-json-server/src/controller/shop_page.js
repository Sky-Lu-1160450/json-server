const shopData = require('../../data/shop_page');  // Import the shop data from wherever it's stored

module.exports = (req, res) => {
  const shopId = parseInt(req.params.id, 10);  // Get the shop ID from the route parameters
  const shop = shopData().find(s => s.id === shopId);  // Find the shop with the matching ID

  if (shop) {
    res.success({
      data: shop
    });
  } else {
    res.fail('Shop not found', 404);
  }
};
