import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions/cartaction";



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
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        const updatedItems = state.items.map((item) => {
          if (item.id === existingItem.id) {
            return {
              ...item,
              quantity: item.quantity + newItem.quantity,
            };
          }
          return item;
        });
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // If the item doesn't exist in the cart, add it
        const updatedItems = [...state.items, newItem];
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return {
          ...state,
          items: updatedItems,
        };
      }
    case REMOVE_FROM_CART:
      const itemIdToRemove = action.payload;
      const updatedItems = state.items.filter(
        (item) => item.id !== itemIdToRemove
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};

export default cartReducer;