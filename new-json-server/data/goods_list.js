// goods_list.js
module.exports = () => {
    return [
      // Fruit Shop
      {
        shopId: 1,
        data: [
          {
            value: 1,
            label: "Fresh Fruits",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 1,
                imgUrl: "/imgs/shop_page/goods-1.jpeg",
                name: "Mango Slice 650g",
                oldPrice: 29.9,
                price: 9.9,
                sellCount: 587,
                rating: 4.2,
                tips: "Freshly cut, use within 2 hours",
                discount: {
                  type: 1,
                  limitCount: 1,
                },
              },
              {
                cartCount: 0,
                checked: true,
                id: 2,
                imgUrl: "/imgs/shop_page/goods-9.jpeg",
                name: "Mixed Fruit 500g",
                oldPrice: 25.9,
                price: 12.5,
                sellCount: 320,
                rating: 4.5,
                tips: "Perfect for a healthy snack",
                discount: {
                  type: 1,
                  limitCount: 2,
                },
              },
            ],
          },
          {
            value: 2,
            label: "Seasonal Deals",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 3,
                imgUrl: "/imgs/shop_page/berry.jpg",
                name: "Seasonal Berries Mix 400g",
                oldPrice: 19.9,
                price: 15.9,
                sellCount: 155,
                rating: 4.7,
                tips: "Best consumed fresh",
                discount: {
                  type: 2,
                  limitCount: 2,
                },
              },
            ],
          },
        ],
      },
  
      // Dumpling Shop
      {
        shopId: 2,
        data: [
          {
            value: 1,
            label: "Signature Dumplings",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 4,
                imgUrl: "/imgs/shop_page/PoD.jpg",
                name: "Pork Dumplings 12 pcs",
                oldPrice: 15.9,
                price: 12.9,
                sellCount: 789,
                rating: 4.6,
                tips: "Comes with dipping sauce",
                discount: {
                  type: 1,
                  limitCount: 3,
                },
              },
              {
                cartCount: 0,
                checked: true,
                id: 5,
                imgUrl: "/imgs/shop_page/VeD.jpg",
                name: "Vegetable Dumplings 10 pcs",
                oldPrice: 14.9,
                price: 11.9,
                sellCount: 543,
                rating: 4.8,
                tips: "Great for vegans",
                discount: {
                  type: 1,
                  limitCount: 2,
                },
              },
            ],
          },
          {
            value: 2,
            label: "Family Combos",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 6,
                imgUrl: "/imgs/shop_page/FaD.jpg",
                name: "Family Dumpling Feast (30 pcs)",
                oldPrice: 45.9,
                price: 39.9,
                sellCount: 200,
                rating: 4.9,
                tips: "Feeds 4-5 people",
                discount: {
                  type: 2,
                  limitCount: 1,
                },
              },
            ],
          },
        ],
      },
  
      // Sushi Shop
      {
        shopId: 3,
        data: [
          {
            value: 1,
            label: "Sushi Rolls",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 7,
                imgUrl: "/imgs/shop_page/Sushi.jpg",
                name: "Salmon Roll 8 pcs",
                oldPrice: 13.9,
                price: 11.9,
                sellCount: 321,
                rating: 4.7,
                tips: "Fresh salmon, made to order",
                discount: {
                  type: 1,
                  limitCount: 2,
                },
              },
              {
                cartCount: 0,
                checked: true,
                id: 8,
                imgUrl: "/imgs/shop_page/AvS.jpg",
                name: "Avocado Roll 8 pcs",
                oldPrice: 11.9,
                price: 9.9,
                sellCount: 210,
                rating: 4.5,
                tips: "A healthy choice",
                discount: {
                  type: 1,
                  limitCount: 2,
                },
              },
            ],
          },
          {
            value: 2,
            label: "Sashimi Specials",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 9,
                imgUrl: "/imgs/shop_page/SaS.jpg",
                name: "Mixed Sashimi 100g",
                oldPrice: 16.9,
                price: 14.9,
                sellCount: 150,
                rating: 4.9,
                tips: "soy sauce and wasabi",
                discount: {
                  type: 2,
                  limitCount: 2,
                },
              },
            ],
          },
        ],
      },
  
      // Burger Shop
      {
        shopId: 4,
        data: [
          {
            value: 1,
            label: "Classic Burgers",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 10,
                imgUrl: "/imgs/shop_page/BuC.jpg",
                name: "Chicken Burger",
                oldPrice: 12.9,
                price: 9.9,
                sellCount: 653,
                rating: 4.6,
                tips: "Served with fries",
                discount: {
                  type: 1,
                  limitCount: 1,
                },
              },
              {
                cartCount: 0,
                checked: true,
                id: 11,
                imgUrl: "/imgs/shop_page/Buger.jpg",
                name: "Beef Burger",
                oldPrice: 11.9,
                price: 8.9,
                sellCount: 432,
                rating: 4.5,
                tips: "Served with a side salad",
                discount: {
                  type: 1,
                  limitCount: 1,
                },
              },
            ],
          },
          {
            value: 2,
            label: "Gourmet Burgers",
            icon: "",
            goods: [
              {
                cartCount: 0,
                checked: true,
                id: 12,
                imgUrl: "/imgs/shop_page/Mub.jpg",
                name: "Truffle Mushroom Burger",
                oldPrice: 20.9,
                price: 17.9,
                sellCount: 98,
                rating: 4.8,
                tips: "A luxurious twist on a classic",
                discount: {
                  type: '$3 off',
                  limitCount: 1,
                },
              },
            ],
          },
        ],
      },
    ];
  };
  