const getGoodsListData = require('../../data/goods_list');

module.exports = (req, res) => {
  console.log("Fetching goods list for shopId:", req.query.shopId);
  const { shopId } = req.query;

  const allGoodsData = getGoodsListData(); // Get the goods list data for all shops
  if (!allGoodsData) {
    return res.status(404).json({ message: 'Goods list not found' });
  }

  // Find the shop by shopId
  const shopData = allGoodsData.find(shop => shop.shopId === Number(shopId));

  if (!shopData) {
    return res.status(404).json({ message: 'No goods found for this shop' });
  }

  console.log("Filtered goods:", shopData.data); // Log the goods list for debugging

  // Return the goods list for the shop
  res.json({
    data: shopData.data,
  });
};
