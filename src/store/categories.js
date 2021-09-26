let initialState = {
  categories: [
    {
      normalizedName: 'ALL',
      displayName: 'ALL',
      description: 'All the goodies 😉'
    },
    {
      normalizedName: 'FOOD',
      displayName: 'FOOD',
      description: 'You are what you eat 🤤'
    },
    {
      normalizedName: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Some 🛸 alien 🛸 tech right here!'
    }
  ],
  activeCategory: {}
};

export default function categoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      let activeCategory = state.categories.filter(
        (category) => category.normalizedName === payload
      );
      console.log('state', state);
      console.log(activeCategory);
      return { ...state, activeCategory: activeCategory[0] };

    default:
      return state;
  }
}
