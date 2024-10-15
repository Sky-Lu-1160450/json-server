module.exports = () => {
    return [
      {
        shopId: 1,
        data: [
          {
            value: 1,
            label: "单品活动",
            icon: "",
            goods: [
                {
                    cartCount: 2,
                    checked: true,
                    id: 1,
                    imgUrl: "/imgs/shop_page/goods-1.jpeg",
                    name: "【果切】 芒果自由选 约 650g 芒果拼拼",
                    oldPrice: 29.9,
                    price: 9.9,
                    sellCount: 587,
                    rating: 4.2,
                    tips: "",
                    discount: {
                      type: 1,
                      limitCount: 1,
                    },
                  },
            ],
          },
          // More categories for shop 1
        ],
      },
      {
        shopId: 2,
        data: [
          {
            value: 1,
            label: "单品活动",
            icon: "",
            goods: [
              // Your goods here for shop 2
              {
                cartCount: 0,
                checked: true,
                id: 2,
                imgUrl: "/imgs/shop_page/goods-2.jpeg",
                name: "【果切】 芒果随机拼 约 250g 阳光切果",
                oldPrice: 16.9,
                price: 3.99,
                sellCount: 354,
                rating: 4.3,
                tips: "现切鲜果，请于两小时内使用",
                discount: {
                  type: 1,
                  limitCount: 1,
                },
              },
            ],
          },
          // More categories for shop 2
        ],
      },
      // Add more shops here
    ];
  };
  