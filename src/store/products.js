let initialState = {
  products: [
    {
      category: 'FOOD',
      name: 'Sabaane5',
      description: 'ZAAAAAAAAAAAAKI',
      price: 1000,
      inventory: 35,
      imgUrl: '/assets/spinach.jpg'
    },
    {
      category: 'FOOD',
      name: '6a7aaleb',
      description: 'What can I say 🤷',
      price: 500,
      inventory: 17,
      imgUrl: '/assets/algae.jpg'
    },
    {
      category: 'FOOD',
      name: 'Za3aanef',
      description: 'fish fish fish fish 🐟',
      price: 12,
      inventory: 7,
      imgUrl: '/assets/fins.jpg'
    },
    {
      category: 'FOOD',
      name: 'Baatenjaan',
      description: '🍆🍆🍆🍆🍆🍆🍆',
      price: 3,
      inventory: 8,
      imgUrl: '/assets/eggplants.jpg'
    },
    {
      category: 'ELECTRONICS',
      name: 'Vape',
      description: 'The mood of the dude',
      price: 10,
      inventory: 2,
      imgUrl: '/assets/vape.png'
    },
    {
      category: 'ELECTRONICS',
      name: 'PC',
      description: 'RGB RGB RGB RGB 🔴 🟢 🔵',
      price: 1200,
      inventory: 3,
      imgUrl: '/assets/pc.jpg'
    }
  ]
};

export default function productsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      if (payload === 'ALL') return initialState;
      let products = initialState.products.filter(
        (product) => product.category === payload
      );
      return { products };

    case 'ADD_TO_CART':
      // decrement inventory
      console.log(state);
      // decrementing from current state
      let productsAfterDecrement = state.products.map((product) => {
        if (product.name === payload.name) {
          product = { ...product, inventory: product.inventory - 1 };
          return product;
        }
        return product;
      });

      return { products: productsAfterDecrement };

    default:
      return state;
  }
}
