

export const activeCategory = (payload) => {
  console.log('working')
  return {
    type: 'ACTIVE_CATEGORY',
    payload
  };
};


export function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload
  };
}

export function removeFromCart(payload) {
  return {
    type: 'REMOVE_FROM_CART',
    payload
  };
}

// export const allCategories = () => {
//   return {
//     type: 'ALL_CATEGORIES'
//   };
// };

