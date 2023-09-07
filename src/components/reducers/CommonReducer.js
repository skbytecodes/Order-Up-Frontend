export const selectedItemReducer = (state = -1, action) => {
  switch (action.type) {
    case "SELECTED_ITEM":
      return action.payload;
    default:
      return state;
  }
};

export const cartReducer = (state = { items: [] }, action) => {
    const existingItemIndex = state.items.findIndex(
        (item) => item.foodId === action.payload.foodId
      );
    switch (action.type) {
    case "ADD_TO_CART":
      if (existingItemIndex === -1) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      } else {
        state.items[existingItemIndex].count += 1;
        return {
          ...state,
          items: [...state.items],
        };
      }
      case "REMOVE_ITEM_FROM_CART" :
        if(existingItemIndex === -1){
            return  state;
        }else{
            if( state.items[existingItemIndex].count === 0){
                return  state;
            }else{
                state.items[existingItemIndex].count -= 1;
                return {
                    ...state,
                    items: [...state.items]
                  };
            }
            
        }

    default:
      return state;
  }
};
