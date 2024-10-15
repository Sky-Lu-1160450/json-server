const getGoodsListData = require('../../data/goods_list');

module.exports = (req, res) => {
  console.log("Fetching goods list for shopId:", req.query.shopId); 
  const { shopId } = req.query; 

  const allGoodsData = getGoodsListData(); // Get the goods list data
  if (!allGoodsData) {
    return res.status(404).json({ message: 'Goods list not found' });
  }

  // Check if the shopId matches
  if (allGoodsData.shopId !== Number(shopId)) {
    return res.status(404).json({ message: 'No goods found for this shop' });
  }

  const goodsList = allGoodsData.data; // Get the goods array inside the object

  console.log("Filtered goods:", goodsList); // Log the goods list for debugging

  // Return the goods list for the shop
  res.json({
    data: goodsList,
  });
};
