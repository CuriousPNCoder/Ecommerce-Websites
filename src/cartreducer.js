import { ADD_TO_CART } from "./actions/cartaction";

// Load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
  try {
    const serializedCartItems = localStorage.getItem("cartItems");
    if (serializedCartItems === null) {
      return [];
    }
    return JSON.parse(serializedCartItems);
  } catch (error) {
    console.error("Error loading cart items from local storage:", error);
    return [];
  }
};

const initialState = {
  items: loadCartItemsFromLocalStorage(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const updatedItems = [...state.items, newItem];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state; // Return the current state for other actions
  }
};
export default cartReducer;
