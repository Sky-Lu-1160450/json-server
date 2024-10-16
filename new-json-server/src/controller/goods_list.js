const getGoodsListData = require('../../data/goods_list');

module.exports = (req, res) => {
  console.log("Fetching goods list for shopId:", req.query.shopId); 
  const { shopId } = req.query; 

  const allGoodsData = getGoodsListData(); // Ensure this returns an array
  if (!Array.isArray(allGoodsData)) {
    return res.status(500).json({ message: 'Internal Server Error: Goods data is not an array' });
  }

  // Use the `find` method to locate the shop by its `shopId`
  const shopData = allGoodsData.find((shop) => shop.shopId === Number(shopId));

  // If no shop with the provided `shopId` is found
  if (!shopData) {
    return res.status(404).json({ message: 'No goods found for this shop' });
  }

  // Return the goods list for the found shop
  console.log("Filtered goods for shop:", shopData.data); // Log the goods list for debugging
  res.json({
    data: shopData.data,
    code: 0,
    msg: 'Request successful',
     // Send the data for the selected shop
  });
};
