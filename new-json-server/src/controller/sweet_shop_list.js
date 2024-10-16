// src/controller/sweet_shop_list.js
const sweetShopData = require('../../data/sweet_shop_list')();  // Import the data from the sweet_shop_list.js file

module.exports = (req, res) => {
  res.json({
    shops: sweetShopData,
    total: sweetShopData.length,
  });
};
