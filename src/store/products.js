let initialState = {
  products: [
    {
      category: 'FOOD',
      name: 'Grilled Chicken',
      description: 'Full chicken marinated.',
      price: 1000,
      inventory: 35,
      imgUrl: '/assets/Grilled Chicken.jpg'
    },
    {
      category: 'FOOD',
      name: 'Chicken Plate Shawarma',
      description: 'Contains chicken.',
      price: 1000,
      inventory: 35,
      imgUrl: '/assets/Chicken Plate Shawarma.jpeg'
    },
    {
      category: 'FOOD',
      name: 'Chicken Tandoori',
      description: 'Juicy chicken',
      price: 500,
      inventory: 17,
      imgUrl: '/assets/Chicken Tandoori.jpeg'
    },
    {
      category: 'FOOD',
      name: 'Kulcha',
      description: 'Kulcha',
      price: 12,
      inventory: 7,
      imgUrl: '/assets/Kulcha.jpeg'
    },
    {
      category: 'ELECTRONICS',
      name: 'laptops Acer',
      description: 'laptops Acer',
      price: '500$',
      inventory: 8,
      imgUrl: '/assets/acer.jpg'
    },
    {
      category: 'ELECTRONICS',
      name: 'Lenovo Chromebook S330',
      description: 'Lenovo Chromebook S330',
      price: 3,
      inventory: 8,
      imgUrl: '/assets/Lenovo.jpg'
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
      description: 'PC',
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
