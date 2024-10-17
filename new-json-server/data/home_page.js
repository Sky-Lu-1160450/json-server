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
      { label: 'Fresh Fruit' },
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
        badge: 'Hot Deal',
        detail:'Order $60=free delivery on all items!',
        btn: '🚀Fast & Free'
      },
      {
        type: 'Limited Time',
        badge: 'Exclusive',
        detail:'Ensure top quality in every order.',
        btn: '🏅 Quality Guaranteed'
      },
      {
        type: 'Appreciation',
        badge: 'Special Offer',
        detail:'Your trust means everything to us.',
        btn: '🎁 Just for You'
      },
      // {
      //   type: 'Promotion',
      //   badge:'Time’s Ticking!',
      //   detail:'Make the most of your time— Order now!',
      //   btn: '⏳Don’t Miss Out'
      // },
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
