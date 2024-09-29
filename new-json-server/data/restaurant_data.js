module.exports = () => {
    return {
      restaurants: [
        {
          id: 1,
          name: 'Pizza Palace',
          location: '123 Main Street, Wellington',
          rating: 4.5,
          reviews: [
            { user: 'John', comment: 'Great pizza!', rating: 5 },
            { user: 'Jane', comment: 'Fast delivery.', rating: 4 }
          ],
          menu: [
            { name: 'Margherita Pizza', price: 12.99 },
            { name: 'Pepperoni Pizza', price: 14.99 }
          ]
        },
        {
          id: 2,
          name: 'Sushi World',
          location: '456 Sushi Lane, Wellington',
          rating: 4.8,
          reviews: [
            { user: 'Alex', comment: 'Best sushi in town!', rating: 5 },
            { user: 'Tom', comment: 'Very fresh.', rating: 5 }
          ],
          menu: [
            { name: 'Salmon Nigiri', price: 8.99 },
            { name: 'Tuna Roll', price: 7.99 }
          ]
        }
      ]
    };
  };
  