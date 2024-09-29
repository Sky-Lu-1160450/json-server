module.exports = () => {
    return {
      id: 1,
      postUrl: '/imgs/index_page/shop-list/post1.png',
      shopName: 'Dumpling Shop',
      branch: 'Wellington',
      score: 4.7,
      monthlyCount: 7020,
      deliveryTime: '约30分钟',
      deliveryDistance: '849m',
      deliveryStratingPrice: '￥20.0',
      deliveryStrategy: '', // 免配送费
      deliveryTags: [''],
      comments: ['“红柚红心火龙果凤梨约600g三拼”'],
      tops: ['XX区水果热销第2名'],
      activitys: [
        {
          // 满减
          type: 2,
          infos: ['49减3', '59减6', '79减8', '99减18'],
        },
        {
          // 特价
          type: 3,
          tips: '特价4选1',
        },
      ],
      services: [
        {
          tpye: 1,
          label: 'Fast Refund',
        },
        {
          tpye: 2,
          label: 'Eco Packaging',
        },
        {
          tpye: 3,
          label: '24/7 Support',
        },
        {
          tpye: 4,
          label: '支持预订',
        },
        {
          tpye: 5,
          label: '开发票',
        },
      ],
      redbags: [
        {
          // 新客红包
          type: 1,
          count: 6,
          if: 'New Customer',
        },
        {
          // 满减
          type: 2,
          count: 15,
          if: 'Off Spend $79',
        },
      ],
      discounts: [
        {
          // 满减
          type: 1,
          label: '满减',
          content: [
            {
              count: 3,
              if: 49,
            },
            {
              count: 6,
              if: 59,
            },
            {
              count: 8,
              if: 79,
            },
            {
              count: 10,
              if: 99,
            },
          ],
        },
        {
          // 配送
          type: 2,
          label: '配送',
          content: [
            {
              count: 5,
              if: 0.01,
              limit: '当日每人限3单优惠',
            },
          ],
        },
        {
          // 特价
          type: 3,
          label: '特价',
          content: [
            {
              count: 0.01,
            },
          ],
        },
        {
          // 任选
          type: 4,
          label: '任选',
          content: [
            {
              label: '部分商品3件27.9元',
            },
          ],
        },
      ],
      announcement:
        'Freshly steamed, perfectly delicious – Taste the joy in every dumpling!'
    }
}
  