const getItemData = () => ({
    id: 1,
    postUrl: '/imgs/index_page/shop-list/post1.png',
    shopName: 'Dumpling Shop',
    
    score: 4.7,
    monthlyCount:'',
    deliveryTime: '30min',
    deliveryDistance: '849m',
    deliveryStratingPrice: '$20.0',
    deliveryStrategy: '', // 免配送费
    deliveryTags: [''],
    comments: [''],
    tops: [''],
    activitys: [
        {
            type: 2,
            infos: ['$20 off $100', '$10 off $50', '$50 off $200', 'Free Delivery over $60']
        },
        {
            type: 3,
            tips: '预售优惠'
        }
    ],
    services: [
        { type: 1, label: '仅配送' },
        { type: 2, label: '蜂鸟速送' },
        { type: 3, label: '品质联盟店' },
        { type: 4, label: '支持预订' },
        { type: 5, label: '开发票' }
    ],
});

module.exports = () => {
    const TOTAL = 50;
    const result = [];
    for (let i = 0; i < TOTAL; i++) {
      const item = getItemData();
      item.id = i;
    //   item.postUrl = `/imgs/index_page/shop-list/post${i}.png`;
      result.push(item);
    }
    return result;
  };
