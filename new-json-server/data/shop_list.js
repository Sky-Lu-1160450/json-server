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
        
        getItemData(5, 'Thailand Food', '/imgs/index_page/shop-list/post5.jpg', 4.6, '40min', '2.0km', '$28.0', [
            {
                type: 2,
                infos: ['Free Delivery over $50']
            }
        ]),
        getItemData(6, 'Italian Food', '/imgs/index_page/shop-list/post6.png', 4.9, '25min', '900m', '$30.0', [
            {
                type: 2,
                infos: ['Free Delivery over $40']
            }
        ]),
        getItemData(7, 'Mexican Food', '/imgs/index_page/shop-list/post7.jpg', 4.4, '30min', '1.8km', '$26.0', [
            {
                type: 2,
                infos: ['Free Delivery over $60']
            }
        ]),
        getItemData(8, 'Indian Food', '/imgs/index_page/shop-list/post8.jpg', 4.7, '35min', '1.0km', '$24.0', [
            {
                type: 2,
                infos: ['Free Delivery over $55']
            }
        ]),
        getItemData(9, 'Mediterranean Food', '/imgs/index_page/shop-list/post9.jpg', 4.8, '30min', '1.3km', '$29.0', [
            {
                type: 2,
                infos: ['Free Delivery over $45']
            }
        ]),
        // Add more stores
    ];

    return stores;
};
