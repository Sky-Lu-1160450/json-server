const getItemData = (id, shopName, postUrl, score, deliveryTime, deliveryDistance, deliveryStratingPrice, activitys) => ({
    id: id,
    postUrl: postUrl,
    shopName: shopName,
    score: score,
    deliveryTime: deliveryTime,
    deliveryDistance: deliveryDistance,
    deliveryStratingPrice: deliveryStratingPrice,
    deliveryTags: [''],
    comments: [''],
    tops: [''],
    activitys: activitys || [
        {
            type: 2,
            infos: ['Free Delivery over $60']
        },
        
    ],
    services: [
        { type: 1, label: 'Delivery only' },
        { type: 2, label: 'Fast Delivery' },
        { type: 3, label: 'Premium Store' },
        { type: 4, label: 'Supports Pre-order' },
        { type: 5, label: 'Provides Invoices' }
    ],
});

module.exports = () => {
    const stores = [
        getItemData(1, 'Fruit Shop', '/imgs/index_page/shop-list/post2.jpg', 4.7, '30min', '849m', '$20.0'),
        getItemData(2, 'Dumpling Shop', '/imgs/index_page/shop-list/post1.png', 4.5, '25min', '1.2km', '$18.0', [
            {
                type: 2,
                infos: ['Free Delivery over $60']
            }
        ]),
        getItemData(3, 'Sushi Bar', '/imgs/index_page/shop-list/post3.jpeg', 4.8, '20min', '500m', '$25.0', [
            {
                type: 2,
                infos: ['Free Delivery over $60']
            }
        ]),
        getItemData(4, 'Burger House', '/imgs/index_page/shop-list/post4.jpg', 4.2, '35min', '1.5km', '$22.0', [
            {
                type: 2,
                infos: ['Free Delivery over $30']
            }
        ]),
        // Add more stores
    ];

    return stores;
};
