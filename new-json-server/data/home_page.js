module.exports = () => {
  return {
    searchRecommends: [
      { value: 0, label: 'Brisket' },
      { value: 1, label: 'Salad' },
      { value: 2, label: 'Bubble-tea' },
      { value: 3, label: 'Juice' }
    ],
    banner: [
      // { imgUrl: '/imgs/index_page/transformer-banner.png' }
    ],
    transformer: [
      { label: 'Chinese Food'},
      { label: 'Korean Food' },
      { label: 'Tailand food' },
      { label: 'Italian Food' },
      { label: 'Mexican Food' },
      { label: 'Indian Food' },
      { label: 'Japanese Food' },
      { label: 'Mediterranean Food' },
      { label: 'NewZealand Food' }
    ],
    scrollBarInfoList: [
      {
        type: 'Promotion',
        badge: 'New',
        detail: 'Exclusive deal: Buy one pizza, get one free for the next 24 hours!',
        btn: 'Order Now'
      },
      {
        type: 'Promotion',
        badge: 'New',
        detail: 'New dish Roasted Duck at $8.88',
        btn: 'Order Now'
      }
    ],
    countdown: {
      time: '24:00:00',
      goods: {
        // imgUrl: '/imgs/index_page/deal.png',
        name: 'Bubble Tea',
        price: 19.8,
        oldPrice: 28.9
      }
    },
    activities: [
      
    ],
    
  };
};
